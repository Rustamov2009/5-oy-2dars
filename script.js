let Haftakuni = +prompt(`Son kiriting`)

function week(day) {
    switch (day) {
        case 1:
            alert(`Bugun Dushanba`)
            break;
        case 2:
            alert(`Bugun Seshanba`)
            break;
        case 3:
            alert(`Bugun Chorshanba`)
            break;
        case 4:
            alert(`Bugun Payshanba`)
            break;
        case 5:
            alert(`Bugun Juma`)
            break;
        case 6:
            alert(`Bugun Shanba`)
            break;
        case 7:
            alert(`Bugun Yakshanba`)
            break;

        default:
            alert(`Bunday hafta kuni yo'q`)
            break;
    }
}
week(Haftakuni)