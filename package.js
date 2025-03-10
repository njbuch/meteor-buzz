Package.describe({
	summary: "The fantastic Buzz javascript sound library repackaged for Meteor",
  version: "1.2.1",
  git: "https://github.com/njbuch/meteor-buzz.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1");
	
	if (api.export) // ensure backwards compatibility with Meteor pre-0.6.5
    		api.export('BUZZ');

	api.add_files([
		'lib/buzz/dist/buzz.js'
		], 'client');
});
