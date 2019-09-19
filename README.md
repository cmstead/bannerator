# Bannerator #

Bannerator makes it easy to integrate randomized banner output to your script or CLI project.  This can be especially useful if you want to surface a number of informational topics to your users.

## Installation ##

Use NPM to install this package:

`npm install bannerator`

## Usage ##

Bannerator is a small, simple output utility.  Below is an example of how to use the entire system.

```javascript
const bannerator = require('bannerator').buildBannerator();

bannerator.setBannerText([
    'Don\'t forget to commit your changes!',
    'You can always find the docs at https://www.npmjs.com/package/bannerator'
]);

bannerator.setBannerSurround('%$%$% ');

bannerator.displayBanner();
```

This will output with one of the two strings like below:

```
%$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% 

Don\'t forget to commit your changes!

%$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% %$%$% 
```