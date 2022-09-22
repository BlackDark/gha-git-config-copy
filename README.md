# Git config copy authorization header

This action copies the authorization header temporary to the global config and deletes it at the end with the post script.

## Inputs

| property name   | value type | default value          | description                                                                                                                                                                                                 |
| --------------- | ---------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`         | string     | **n/a**                | **required** value for git user.password and GIT_USER                                                                                                                                                       |
| `gitConfigPath` | string     | **"http.extraheader"** | **optional** path of the extraheader location in the git config. Default is for all locations possible you want to restrict it to only a subdomain. For example: "http.https://yourdomain.com/.extraheader" |

The minimally required action configuration requires a token being explicitly specified.
Example below uses secrets.GITHUB_TOKEN available to the workflow as a token source.

```
- uses: BlackDark/gha-git-config-copy@main
  with:
    token: '${{ secrets.GITHUB_TOKEN }}'
```

## Outputs

No outputs produced.

## Example usage

```yaml
- uses: BlackDark/gha-git-config-copy@main
  with:
    token: "${{ secrets.GITHUB_TOKEN }}"
```
