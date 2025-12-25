## Scripts

- `npm run dev` - run local graphQL server
- `npx prisma migrate dev` make a migration

## Logging in with the graphQL explorer

Use the login mutation with valid credentials to get the token. Then add the token to the Headers of the explorer with this form.

```JSON
{
  "authorization":"Bearer YOUR TOKEN"
}
```
