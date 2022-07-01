// Rekursif : teknik pada sebuah function yang memanggil dirinya sendiri
// bentuk perulangan seperti biasa 

const countDown = start => {
    do {
        console.log(start);
        start -=1;
    }
    while(start > 0)
};

countDown(10);

// bentuk rekursif

const countDown1 = start => {
    console.log(start);
    if (start > 0) countDown1(start-1); //bentuk rekursif
};

countDown1(10);