/*jshint laxcomma:true*/

// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
    // The port on which the instrumenting proxy will listen
    proxyPort: 9000,

    // A fully qualified URL to the Intern proxy
    proxyUrl: 'http://localhost:9000/',

    // Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
    // specified browser environments in the `environments` array below as well. See
    // https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
    // https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
    // Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
    // automatically
    capabilities: {
        'selenium-version': '2.35.0'
    },

    // Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
    // OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
    // capabilities options specified for an environment will be copied as-is
    environments: [
        /* {browserName:'internet explorer', version:'10', platform:'Windows 8'}
        ,{browserName:'internet explorer', version: '9', platform:'Windows 8'}
        ,{browserName:'firefox',           version:'23', platform:'Linux'}
        ,{browserName:'firefox',           version:'21', platform:'Mac 10.6'}
        ,{browserName:'chrome',                          platform:'Linux'}
        ,{browserName:'safari',            version: '6', platform:'Mac 10.8'}*/

         {browserName:'chrome'}
        ,{browserName:'firefox'}
	],

    // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
    maxConcurrency: 1,

    // Whether or not to start Sauce Connect before running tests
    useSauceConnect: false,

    // Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
    // in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
    // publishing this configuration file somewhere
    webdriver: {
         port: 4444
        ,host: 'localhost'
        //,host: 'vmsel-hub.selenium.bk.sapo.pt'
    },

	// Configuration options for the module loader; any AMD configuration options supported by the Dojo loader can be
	// used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
		packages: [
			{location:'lib',    name:'lib'},
            {location:'custom', name:'custom'}
		]/*,
        trace:{ // http://dojotoolkit.org/reference-guide/1.9/loader/amd.html#loader-amd
            "loader-inject":              1,
            "loader-define":              1,
            "loader-exec-module":         1,
            "loader-run-factory":         1,
            "loader-finish-exec":         1,
            "loader-define-module":       1,
            "loader-circular-dependency": 1
        }*/
	},

	// Non-functional test suite(s) to run in each browser
	suites: [
        'intern/node_modules/dojo/has!host-browser?tests/myPkg_amd',
        'intern/node_modules/dojo/has!host-browser?tests/myPkg_no_amd'
    ],

    // Functional test suite(s) to run in each browser once non-functional tests are completed
    functionalSuites: [
        'tests/functional/calculate'
    ],

    // A regular expression matching URLs to files that should not be included in code coverage analysis
    excludeInstrumentation: /^tests\//,
    //excludeInstrumentation: /.*/, // no instrumentation at all :P

    reporters: [
        //'runner'
        //'lcov' // for runner
        //'custom/junit'
        'custom/jsonunit'
    ]
});
