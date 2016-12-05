import React, {Component} from 'react';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <h1>Basic Information</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Живко
                Недялков &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Ася Дикова <br></br>
                <img src="https://cdn.rawgit.com/Tuscann/Softuni/master/JS%20core/JavaSrpt%20Apps/Zhivko.JPG" alt="Zhivko"
                     height={200} width={200}></img>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                src="https://cdn.rawgit.com/Tuscann/Softuni/master/JS%20core/JavaSrpt%20Apps/Asq.jpg" alt="Asq"
                height={200} width={200}></img> <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/Tuscann" target="_blank">Github Живко
                Недялков</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/AsyaDikova" target="_blank">Github Ася Дикова</a>
            </div>
        );
    }
}

