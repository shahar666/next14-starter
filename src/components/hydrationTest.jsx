"use client"

const HydrationTest = () => {

    const a = Math.random();

    console.log(a);

    return (
        <div>HydrationTest - {a}</div>
    )
}

export default HydrationTest