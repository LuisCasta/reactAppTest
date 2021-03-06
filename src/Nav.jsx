import logo from './src/logo.png'


const hoy = new Date();
const fecha = '0' + hoy.getDay() + '/' + '0' +
 hoy.getMonth() + '/' +  hoy.getFullYear() 
+ ' ' +  ' ' ;
const hora =  ' ' + hoy.getHours() + ':' + hoy.getMinutes();

export const Nav = () => { 

    return(
        <>
            <nav className="nav">
                <div className='ventos-logo'>
                    <a href=""><img src={logo} /></a>
                </div>

                <div className="resto">
                    <a href="">{fecha}{hora}</a>
                    <a href=""><img src='' alt="" />Mis Webinars</a>
                    <a href=""><i className='bx bxs-comment-add bx-sm'></i></a>
                </div>
            </nav>
        </>
    )

};