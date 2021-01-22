<p align="center">
  A boilerplate for using Wordpress as Headless CMS with Sapper/Svelte. Can be used with Rest Kit or just with Wordpress and a set of plugins. 🚀
</p>

## Hello 👋,

![GitHub release](https://img.shields.io/github/release/wp-kit/wp-sapper-start.svg?style=for-the-badge)

Wordpress is great, Sapper is great. Why not use them together? This is a boilerplate of Twenty-Twenty-One Theme but in Sapper.

Forked from [matt3224/sapper-start](https://github.com/matt3224/sapper-start) for that lovely Sapper pre-configured setup.

To clone it and get started:

```bash
# for Rollup
npx degit matt3224/sapper-start my-app
cd my-app
npm install
npm run dev
cp .env.example .env
```

Make sure you have a Wordpress installation with the following plugins:

|Plugin Name|Explanation|
|----|-----|
|[WP ACF REST API Blocks](https://github.com/wp-kit/wp-acf-rest-api-blocks)|This is a super important plugin that outputs Gutenberg Block data to API responses for Posts and Pages. It also outputs ACF Block data if you have ACF installed. Alternatively, you could use [Rest Kit](https://github.com/wp-kit/rest-kit) which gives you a bunch of other features as well as Blocks JSON, including the ability to build and manage custom Gutenberg blocks (both React style or with ACF Blocks).|
|[WP Rest Filter](https://wordpress.org/plugins/wp-rest-filter/)|In the boilerplate code for [wp-sapper-start](https://github.com/wp-kit/wp-sapper-start), we have included examples of filtering by term and author slugs, and have implemented this based on using WP Rest Filter. We generally recommend this plugin when seeking to fetch posts and pages primarily based on term slugs.|
|[Yoast SEO](https://wordpress.org/plugins/wordpress-seo/)|In the boilerplate code for [wp-sapper-start](https://github.com/wp-kit/wp-sapper-start), we have included examples of <head> meta tags, and have implemented this based on using Yoast SEO and WP Rest Yoast Meta. We generally recommend this plugin in all cases to control <head> tags within any framework you may be using.|
|[WP Rest Yoast Meta](https://wordpress.org/plugins/wp-rest-yoast-meta/)|In the boilerplate code for [wp-sapper-start](https://github.com/wp-kit/wp-sapper-start), we have included examples of <head> meta tags, and have implemented this based on using Yoast SEO and WP Rest Yoast Meta. We generally recommend this plugin in all cases to control <head> tags within any framework you may be using.|
|[WP Rest API V2 Menus](https://wordpress.org/plugins/wp-rest-api-v2-menus/)|In the boilerplate code for [wp-sapper-start](https://github.com/wp-kit/wp-sapper-start), we have included examples of fetching menus, and have implemented this based on using the endpoints provided by WP Rest API V2 Menus|
|[Application Password](https://wordpress.org/plugins/application-passwords/)|In the boilerplate code for [wp-sapper-start](https://github.com/wp-kit/wp-sapper-start), we have included examples of creating comments, form submissions and previewing draft post and pages; we have implemented this based on storing username and application password in a .env file which is read using server routes which sends a Basic authentication header to the API, this requires Application Password. We generally recommend this plugin when needing to write data back to the API or when needing to authenticate with Wordpress for any reason from your app. We recommend this over storing the raw password in .env or using WP oAuth Server which add more complexity than is neccessary due for a headless website.|
|[ACF to REST API](https://en-gb.wordpress.org/plugins/acf-to-rest-api/)|We generally recommend this plugin if you plan on using ACF in order to output field values within feild groups assigned to Posts and Pages, as oppose to Blocks. Any fields assigned to ACF Blocks are automatically pulled into the response when using rest-kit|
|[WP REST Cache](https://wordpress.org/plugins/wp-rest-cache/)|We generally recommend this plugin for all scenarios when using Wordpress as a headless CMS regardless of the framework you are using.|

After you have setup your Wordpress environment, make sure you edit the `.env` file and change the url to reflect your new Wordpress environment.

Open up [localhost:3000](http://localhost:3000) and start clicking around.

<hr/>

If you use this a lot you can alias it by putting this in your zshrc or bashrc:
```bash
alias wp-sapper-start='npx degit https://github.com/wp-kit/wp-sapper-start .'
```
Then simply cd into your empty project directory and run `wp-sapper-start`


## Bugs and feedback

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started with Sapper itself.

If you run into an issue which you don't see in the normal sapper-template in relation to sapper-start, open an [issue](https://github.com/matt3224/sapper-start/issues).

For any issues on the Wordpress integration side of things please raise an issue on the repo.

<hr/>

## TO DO V1
* Matt: Style/Fix Mobile Menu
* Matt: Style Pagination
* Matt: Style Comments + Gravity Forms + Search Form
* Matt: Style Error Alerts (Comment + GF)
* Matt: Style Success Message (GF)
* Both: Core Form Fields
* Both: Core Blocks
* Both: Update Readme

## ROADMAP
* Both: Widgets
