bash:
	docker run --rm \
	-p 3000:3000 \
	-v ${PWD}:/app \
	-w /app \
	-it node:18 bash
