

function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString= dynamicDate.toGMTString();
    return(
        <center>
            <div>
                {dynamicDateString}(dinâmico)
            </div>
            <div>
                {props.staticDateString}(Estático)
            </div>
        </center>
    );

}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString= staticDate.toGMTString();
    return{
        props:{
            staticDateString
        },
        revalidate:1
    }
}

export default Tempo