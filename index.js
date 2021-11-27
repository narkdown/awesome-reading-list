const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const prettier = require("prettier");
const { getInput, setFailed } = require("@actions/core");
const { getOctokit } = require("@actions/github");
const { NarkdownClient } = require("@narkdown/client");
const { NotionParser } = require("@narkdown/notion-parser");
const { extractIdFromUrl } = require("@narkdown/notion-utils");

try {
  const notionAPIKey = getInput("notion_api_token");
  const databaseUrl = getInput("notion_database_url");
  const fileName = getInput("file_name");
  const token = getInput("gist_token");
  const gistId = getInput("gist_id");

  const propertyOptions = {
    date: {
      timeZone: getInput("date_option_timezone"),
      format: getInput("date_option_format"),
    },
  };
  const sortOptions = [
    {
      timestamp: getInput("sort_option_timestamp"),
      direction: getInput("sort_option_direction"),
    },
  ];

  (async () => {
    const narkdown = new NarkdownClient({ auth: notionAPIKey });
    const notionParser = new NotionParser({ propertyOptions });
    const { results } = await narkdown.unlimited.databases.query({
      database_id: extractIdFromUrl(databaseUrl),
      sorts: sortOptions,
    });

    const rows = notionParser.database.getRows(results);

    const template = await fs.promises.readFile(
      path.resolve("./template.md"),
      "utf8"
    );

    const content = prettier.format(
      ejs.render(template, { rows, databaseUrl }),
      {
        parser: "markdown",
      }
    );

    const octokit = getOctokit(token);
    await octokit.rest.gists.update({
      gist_id: gistId,
      files: {
        [fileName]: {
          fileName,
          content: content,
        },
      },
    });
  })();
} catch (error) {
  setFailed(error.message);
}
