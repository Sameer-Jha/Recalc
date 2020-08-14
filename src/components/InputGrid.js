import React,{useState} from 'react'
import Display from './Display'
import './InputGrid.css'

const Panel = () =>{

    const [ip, ip_handler] = useState('') 
    
    const push = (val) => {
        ip_handler((prev) => (prev+val))
    }

    const clear = () => {
        ip_handler((prev) => (''))
    }

    const backspace = () =>{
        ip_handler((prev) => {
            if(typeof prev === 'string'){
                return prev.substring(0, prev.length - 1)
            }
            else {
                return ''
            }
        }
        )
    }


    const calculate = () => {
        console.log(ip)
        // eslint-disable-next-line
        let val = eval(ip).toFixed(2)  
        console.log(val)
        ip_handler((prev) => (val))
    }


    return(
        <main>
        <section>
            <Display val={ip}/>
        </section>
        <section id='panel'>
        <div className='row orange'>
        <button onClick={backspace}>C</button>
        <button onClick={clear}>AC</button>
        <button onClick={() => push('%')}>%</button>
        <button onClick={() => push('/')}>/</button>
        </div>
        <div className='row'>
        <button onClick={() => push('1')}>1</button>
        <button onClick={() => push('2')}>2</button>
        <button onClick={() => push('3')}>3</button>
        <button className='orange' onClick={() => push('*')}>x</button>
        </div>
        <div className='row'>
        <button onClick={() => push('4')}>4</button>
        <button onClick={() => push('5')}>5</button>
        <button onClick={() => push('6')}>6</button>
        <button className='orange'  onClick={() => push('-')}>-</button>
        </div>
        <div className='row'>
        <button onClick={() => push('7')}>7</button>
        <button onClick={() => push('8')}>8</button>
        <button onClick={() => push('9')}>9</button>
        <button className='orange'  onClick={() => push('+')}>+</button>
        </div>
        <div className='row' id="lower">
        <button className='orange' onClick={() => push('.')}>.</button>
        <button onClick={() => push('0')}>0</button>
        <button className='orange'  onClick={calculate}>=</button>
        </div>
        </section>
        </main>
    )
} 

export default Panel