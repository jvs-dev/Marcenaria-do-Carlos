const menutoggle = document.querySelector('.menutoggle')
const navigation = document.querySelector('.navigation')

menutoggle.onclick = function () {
    navigation.classList.toggle('open')
}
