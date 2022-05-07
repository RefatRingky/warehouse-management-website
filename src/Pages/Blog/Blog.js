import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h2>Question Answer</h2>
            <h4>Difference between javascript and nodejs</h4>
            <p><bold>NodeJs</bold></p>
            <p>1.Node Js is a cross platform</p>
            <p>2.It is Open source javascript runtime enviroment that allow javascript to run on server site</p>
            <p>3.javascript allow to run the code outside the browser</p>
            <p>4.Node Js comes with lot of modules that used for web developement</p>
            <p><strong>Javascript</strong></p>
            <p>1.Javascript is scripting language</p>
            <p>2.It is basically used on client side</p>
            <p>3.Javascript only can be run on browser</p>
            <p>4.Javascript used for fontend developement</p>

            <div>
                <h4>2.Differences between sql and nosql databases.</h4>
                <p><strong>SQL</strong></p>
                <p>1.Relational database management stytem</p>
                <p>2.This database has fixed and predefined schema</p>
                <p>3.This database are not suited for hirarchical storage</p>
                <p>4.Vertically Scalable</p>
                <p><strong>NoSQL</strong></p>
                <p>1.No Relational database system</p>
                <p>2.This database has dynamic schema</p>
                <p>3.This database are suitable for hirarchical storage</p>
                <p>4.Horizontally Scalable</p>
            </div>

            <div>
              <h4>3.What is the purpose of jwt and how does it work</h4>
              <p><strong>JWT OR JSON Web Token</strong></p>
              <p>1.JWT is open standard used to share security information between two paties- 1.client 2.Server</p>
              <p>2.JWTs are  used to a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
              <p><strong>How does it work</strong></p>
              <p>-JSON is differ from other web token that it contain a set of claims</p>
              <p>-Claims are used to transmit information betwwen two parties</p>
              <p>-A Jwt is a string which made up of three parts and which is seperated by dot(.)</p>
              <p>-And it serialized by base64</p>
              <p>-Onece decorated it create 3 part- 1.header 2.payload 3.signature</p>
            </div>
        </div>
       
    );
};

export default Blog;