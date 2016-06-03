# jquery-url-info
jQuery plugin for get urls infomation and show them

Usage
=====

    $(SELECTOR).url_info(OPTIONS);
	
OPTIONS
-------

* server:  You should have API to get info.

```json
{
    "description":"Find discount vitamins, supplements, health foods, beauty products & more! Vitacost.com is your place for health living & eating!",
    "title":"Discount Vitamins, Supplements, Health Foods & More | Vitacost",
    "screenshotUrl":"https://image-staging.wpic-tools.com/**.png",
    "updated":"2016-06-01T16:00:06.593Z"
}
```

Test
====

To run the test you need to setup expressjs:

    $ npm i

then run :

   $ ./browser-sync.sh

And see the HTML page:

   http://localhost:8000/
=======

