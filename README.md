# @narkdown/awesome-reading-list [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[![GitHub Action: View on Marketplace](https://img.shields.io/badge/GitHub%20Action-View_on_Marketplace-blue?logo=github)](https://github.com/marketplace/actions/narkdown-awesome-reading-list)
[![CI](https://github.com/narkdown/awesome-reading-list/actions/workflows/CI.yml/badge.svg?branch=main&event=schedule)](https://github.com/narkdown/awesome-reading-list/actions/workflows/CI.yml)
[![GitHub version](https://badge.fury.io/gh/narkdown%2Fawesome-reading-list.svg)](https://badge.fury.io/gh/narkdown%2Fawesome-reading-list)
[![license: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

> Create your own Awesome Reading List sync with Notion Database!

![Notion to Github](https://user-images.githubusercontent.com/48426991/143674178-c7b045f5-2ea9-4028-96b2-44cdce0d9135.png)

## Demo

- [Notion - Awesome Reading List](https://younho9.notion.site/c0d7fc0843e7421a88dd848932b5dbfd?v=42efd3bccce24649b7818b65cd5c1e88)
- [Gist - younho9/awesome-reading-list.md](https://gist.github.com/younho9/287da0b33fc7d5b5848944f90f3600b7)

## Setup

### Prep work

1. [Duplicate this Notion database template.](https://younho9.notion.site/af6ccfde2f1e4824a4bea2ac1a053eff?v=d613bedd8d44463d8fcde32a6f88114f)
2. [Create a Notion Account.](https://www.notion.so/signup)
3. [Create a Notion API integration & Get Token.](https://developers.notion.com/docs#step-1-create-an-integration)
4. [Share a database with your integration.](https://developers.notion.com/docs#step-2-share-a-database-with-your-integration)
5. [Create a new public GitHub Gist.](https://gist.github.com/)
6. [Create a token with the `gist` scope and copy it.](https://github.com/settings/tokens/new)

### Project setup

1. [Use this repository template.](https://github.com/narkdown/awesome-reading-list/generate)
2. Go to the repo **Settings > Secrets**
3. Add the following environment variables:

   - **NOTION_API_TOKEN**: The Notion token generated above.
   - **NOTION_DATABASE_URL**: The Notion database url duplicated above.
   - **GIST_ID**: The ID of the gist you created above

     ```
     https://gist.github.com/username/287da0b33fc7d5b5848944f90f3600b7
                                      |----------- Gist ID ----------|
     ```

   - **GIST_TOKEN**: The GitHub token generated above.

4. Your awesome reading list will be deployed [at 00:00 AM (UTC) on everyday](https://github.com/younho9/awesome-reading-list/blob/main/.github/workflows/CI.yml#L5). You can trigger action manually.
5. Add your reading list to Notion database. You can use extensions like [Notion Web Clipper](https://chrome.google.com/webstore/detail/notion-web-clipper/knheggckgoiihginacbkhaalnibhilkk) or [Save to Notion](https://chrome.google.com/webstore/detail/save-to-notion/ldmmifpegigmeammaeckplhnjbbpccmm).

### Customize

If you want to generate your own markdown using Notion Database data, you can customize template.

1. Modify [template.md](./template.md)
2. `npm install && npm run build`
3. Change `narkdown/awesome-reading-list@main` to `{your username}/awesome-reading-list@main` in [.github/workflows/CI.yml](./.github/workflows/CI.yml#L18)

## Inputs

### `notion_api_token`

**Required** Notion API Key. [How to get Notion API Key](https://developers.notion.com/docs)

### `notion_database_url`

**Required** Notion Database URL.

### `gist_token`

**Required** Personal access token for updating gist.

### `gist_id`

**Required** Id of the gist to be updated.

<details>
  <summary>Show advanced input options</summary>

### `file_name`

Name of the file to be deployed on gist.

_Default_ `awesome-reading-list.md`

### `date-option-timezone`

Timezone ID used to parse date properties.

_Default_ `Asia/Seoul`

### `date-option-format`

Date formatting rules used to parse data properties.

_Default_ `yyyy-MM-dd HH:mm:ss`

### `sort-option-timestamp`

Database query sorting criteria. `created_time` | `last_edited_time`

_Default_ `created_time`

### `sort-option-direction`

Database query sorting direction. `ascending` | `descending`

_Default_ `descending`

</details>

## Example workflow

- [.github/workflows/CI.yml](./.github/workflows/CI.yml#L18)

## Related

- [@narkdown/client](https://github.com/narkdown/client)
- [@narkdown/notion-parser](https://github.com/narkdown/notion-parser)

## License

[MIT](LICENSE)
