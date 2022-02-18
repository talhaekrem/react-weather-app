export const GetDate = (dt, options = null) => {
    //open weatherappin datetime tanımı "Epoch" türündedir. bunu js Date objesine çevirmek  için milisecondu 1000 ile çarparız
    var date = new Date(dt * 1000);
    if (options === null) {
        return date;
    }
    return date.toLocaleDateString("en-US", options);
};