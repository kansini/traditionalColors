export const setLS = (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data))
}
// 存储数据


// 获取数据
export const getLS = (name: string) => {
    const LS = localStorage.getItem(name)
    return !!LS ? JSON.parse(LS) : null
}

