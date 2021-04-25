# try-heroku

## Provisioning

```sh
heroku create try-sisisin-heroku --manifest # provisioning heroku app
heroku stack:set heroku-20  # change stack `container` to `heroku-20`
git push heroku main
```

## Destroy application

```sh
heroku apps:destroy
```
