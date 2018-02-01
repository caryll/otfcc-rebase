#!/usr/bin/env node
const { Workflow, introduce, build, rebase } = require("megaminx");

const main = async function() {
	const config = {};
	const flow = new Workflow(config);
	await flow.run(recipe, config, {});
};

main().catch(console.error);

async function recipe(ctx, config, argv) {
	const scale = process.argv[2] - 0;
	await ctx.run(introduce, "major", { from: "|" });
	await ctx.run(rebase, "major", { scale });
	await ctx.run(build, "major", { to: "|" });
}
