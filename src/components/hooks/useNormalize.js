const useNormalize = (rawData, keysMap) => {
    if (rawData && keysMap) {
        const ls = rawData.records || (Array.isArray(rawData) && rawData)
        if (!ls) {
            console.error('useNormalize 数据源为空')
            return [];
        }
        const newData = ls.map(record => {
            const entry = {};
            for (const [originalKey, newKey] of Object.entries(keysMap)) {
                if (record.hasOwnProperty(originalKey)) {
                    entry[record[originalKey]] = record[newKey];
                }
            }
            return entry;
        });
        return newData;
    }
    return []
};

export default useNormalize;