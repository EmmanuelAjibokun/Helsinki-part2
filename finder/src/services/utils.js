const filterSearch = (list, filterBy) => {
    const matches = list.filter(item => item.name.common.toLowerCase().includes(filterBy.toLowerCase()))
    return matches;
}

export { filterSearch }