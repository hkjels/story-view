
build: components index.js story-view.css template.js
	@component build --dev --use component-autoprefixer

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean