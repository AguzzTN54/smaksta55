const getFromSheet = async () => {
	try {
		const data = await fetch(
			'https://opensheet.elk.sh/1VlpvPpBjvKkCoXZMi2VXpn072CB_NyInu_NCsfuz508/Kehadiran'
		);
		const parsed = await data.json();
		return parsed;
	} catch (e) {
		console.error('failed to process data');
		return [];
	}
};

const processSheet = (parsed) => {
	return parsed.map((item) => {
		const newObj = {};
		Object.keys(item).forEach((key) => {
			if (key.includes('KONFIRMASI')) {
				newObj.konfirmasi = item[key].toLocaleLowerCase();
				return;
			}
			newObj[key.toLocaleLowerCase()] = item[key].toLocaleLowerCase().trim();
			return;
		});
		return newObj;
	});
};

const pastidatang = (data) => {
	return data
		.filter((thing, index, self) => self.findIndex((t) => t.nama === thing.nama) === index)
		.filter(({ konfirmasi }) => konfirmasi === 'pasti datang');
};

const sortByName = (data) => {
	return data.sort((a, b) => {
		if (a.nama > b.nama) return 1;
		if (a.nama < b.nama) return -1;
		return 0;
	});
};

export const whiteList = async () => {
	const data = await getFromSheet();
	const list = processSheet(data);
	const filtered = pastidatang(list);
	const sort = sortByName(filtered);
	return sort;
};
