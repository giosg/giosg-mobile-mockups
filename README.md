giosg Mobile Mockup
===================

This app is a mockup of the giosg mobile app.
**You are welcome to re-use any of these assets on the actual implementation if you wish,
but you can of course re-implement the UI as you like!**
Some parts of the mockup (such as the "virtual keyboard") are purely for demonstration purposes.

If you have any questions about the mockup, you can contact Kimmo Kiiski (kimmo@giosg.com).


Try the mockup
--------------

You can try the mockup on [Github Pages][demo].

[demo]: http://giosg.github.io/giosg-mobile-mockups/


Repository summary
------------------

The mockup source code is available at [Giosg Github repository][repo].

The app styles are build on [Bootstrap][] using [SASS][].

- See the [main SASS file](app/styles/main.scss) for custom styling (excluding Bootstrap).
- See the [compiled main CSS](dist/styles/main.css) for the pure CSS compilation.
- The [app folder](app/) also contains the static HTML files.
- The images are located on the [images folder](app/images/).


[repo]: https://github.com/giosg/giosg-mobile-mockups
[SASS]: http://sass-lang.com/
[Bootstrap]: http://getbootstrap.com/


Set up development environment
------------------------------

The demo app has been built using [Yeoman][].
You need at least [Bower][] and [Grunt][] to build the demo app locally.

[Yeoman]: http://yeoman.io/
[Bower]:  http://bower.io/
[Grunt]:  http://gruntjs.com/

Clone the repository and check out its `master` branch:

    git clone https://github.com/giosg/giosg-mobile-mockups.git

On the cloned repository, first install the Node dependencies:

    npm install

Then, install the vendor JavaScript, CSS and other local assets, required by the demo app:

    bower install



Run the demo app locally
------------------------

Preview the generated demo app:

    grunt serve

You can build the files to the `dist` folder:

    grunt
