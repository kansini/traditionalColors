export const smoothScrollTo = (id: string) => {
    const ele = document.getElementById(id)
    const offset = 56
    const top = ele ? ele.offsetTop - offset : 0
    window.scrollTo({
        behavior: 'smooth',
        top: top
    })
}