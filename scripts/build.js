import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

// eslint-disable-next-line no-console
console.log(chalk.blue('Generating minified bundle for production.'));

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		// eslint-disable-next-line no-console
		console.log(chalk.red(err));
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		// eslint-disable-next-line no-console
		console.log(chalk.red('Webpack generated the following errors: '));
		// eslint-disable-next-line no-console
		return jsonStats.errors.map(error => console.log(chalk.red(error)));
	}

	if (jsonStats.hasWarnings) {
		// eslint-disable-next-line no-console
		console.log(chalk.yellow('Webpack generated the following warnings: '));
		// eslint-disable-next-line no-console
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
	}

	// eslint-disable-next-line no-console
	console.log(`Webpack stats: ${stats}`);

	// eslint-disable-next-line no-console
	console.log(chalk.green('The app has been built for production and written to /dist.'));

	return 0;
})
