function sleep(timeInMs) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res()
		}, 1000)
	})
}

async function demo() {
console.log('start');
await sleep(1000);
console.log('log after 1000ms')
}

demo()