# Automated Downloads

Automated Downloads send HTTP requests and download the hosts' responses to file.

All sources are downloaded in sequence by using the `FETCH` mode.

## Syntax

::: info Keys
- `name`: string
	- The name of the source for informational purposes.
- `url`: string
	- The URL for the request.
- `type`: string
	- The HTTP method for the request.
	- Must be `GET` or `POST`.
- `headers`: {\[string]: string}
	- The headers for the request.
- `postData`: (string | Object)
	- The data to submit in `POST` requests.
- `path`: string
	- The path to save the downloaded file.
:::
::: danger UNAVAILABLE
The `POST` HTTP method is unimplemented.
:::

## Example

```json
"sources": [
	{
		"name": "Economy",
		"url": "https://docs.google.com/spreadsheets/d/(redacted)/export?format=xlsx",
		"type": "GET",
		"headers": {},
		"path": "Economy.xlsx"
	}
]
```
