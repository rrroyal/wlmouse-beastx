const str = `
0000   04 76 c1 06 18 00 00 00 00 04 04 04 00 00 21 00
0010   95 01 00 03 00 00 01 00 40 06 40 06 10 00 c8 01
0020   00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
0030   00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
`

const finished = str
	.split("\n")										// split by line
	.filter(line => !!line.length)						// remove empty lines
	.map(line => (line.slice(4 + 3)))					// remove padding
	.map(line => "0x" + line)							// add first `0x`
	.map(line => line.replaceAll(" ", ",0x"))			// replace spaces with `0x`
	// .map(line => line.replaceAll(/([(0x00),])+$/g, ""))	// remove `0x00` suffix
	.filter(line => !!line.length)						// remove empty lines
	.join(",")											// join lines with `,`

process.stdout.write(finished)
