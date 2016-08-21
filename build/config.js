var dest = "dist",
	src = "src";

module.exports = {
	paths: {
		src: src,
		dest: dest,
		clean: [dest + "/**/*", "!" + dest + "/node_modules{,/**}"],
		ts: {
			src: [src + "/**/*.ts{,x}", "!" + src + "/typings{,/**}"],
			dest: dest,
			config: src + '/tsconfig.json'
		},
		other: [src + "/**/*.json", "!" + src + "/{package,typings,tsconfig}.json", "!" + src + "/typings{,/**}"],
		install: src + "/package.json",
		typings: src + "/typings.json"
	}
}