module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	syntax: 'scss',
	plugins: ['stylelint-order', 'stylelint-prettier'],
	rules: {
		'declaration-block-no-duplicate-properties': true,
		'declaration-block-no-redundant-longhand-properties': true,
		indentation: 2,
		'order/properties-alphabetical-order': true,
		'property-no-vendor-prefix': true,
		'selector-list-comma-newline-after': 'always-multi-line',
		'selector-pseudo-class-no-unknown': [true, {
			ignorePseudoClasses: ['export']
		}],
		'shorthand-property-no-redundant-values': true,
		'string-quotes': 'single',
		'unit-whitelist': ['rem', '%', 'vh', 'vw', 's'],
		'value-list-comma-space-after': 'always'
	}
}
