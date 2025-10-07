function soma(n1,n2) {
    const res = n1 + n2
    return res
}

function sub(n1,n2) {
    console.log(n1 - n2)
}

sub(soma(10,20) , 5)

function mult(n1,n2) {
    console.log(n1*n2)
}

mult(soma(1,3) , 3)