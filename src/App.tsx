import React from 'react';
import './App.css';
import AppButton from "./AppButton";
import {Space, theme} from "antd";

const {getDesignToken} = theme;
const globalToken = getDesignToken();
const {colorPrimary, borderRadius} = globalToken;
console.log('colorPrimary:', colorPrimary);
console.log('borderRadius:', borderRadius);

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <span role="img" aria-label="logo" className="App-logo">
        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
          <g>
            <path fill="#394240" d="M54.627,9.372c-12.496-12.494-32.758-12.494-45.254,0c-12.497,12.496-12.497,32.758,0,45.256
              c12.496,12.496,32.758,12.496,45.254,0C67.124,42.13,67.124,21.868,54.627,9.372z M53.213,10.786
              c4.428,4.428,7.179,9.895,8.261,15.615c-9.549-0.729-19.344,2.539-26.646,9.84c-1.283,1.283-2.437,2.646-3.471,4.066
              c-2.487-1.861-4.873-3.926-7.136-6.188c-0.568-0.568-1.106-1.156-1.648-1.74c1.785-2.346,3.748-4.602,5.892-6.744
              c7.077-7.078,15.369-12.184,24.198-15.373C52.847,10.437,53.033,10.606,53.213,10.786z M50.973,8.759
              c-8.719,3.309-16.901,8.441-23.922,15.463c-2.117,2.117-4.065,4.34-5.845,6.65c-2.224-2.543-4.227-5.211-5.993-7.986
              c4.333-5.684,6.633-12.416,6.904-19.217C31.742,0.319,42.732,2.015,50.973,8.759z M10.787,10.786
              c2.755-2.756,5.915-4.854,9.285-6.312c-0.395,5.848-2.387,11.605-5.978,16.566c-1.728-2.922-3.208-5.945-4.448-9.047
              C10.014,11.585,10.393,11.181,10.787,10.786z M8.193,13.755c1.291,3.084,2.818,6.086,4.582,8.988
              c-0.625,0.75-1.285,1.482-1.988,2.186c-2.626,2.625-5.599,4.686-8.766,6.207C2.196,24.985,4.254,18.882,8.193,13.755z
               M2.031,33.339c3.688-1.645,7.145-3.971,10.17-6.996c0.588-0.588,1.142-1.199,1.678-1.818c1.809,2.777,3.848,5.447,6.104,7.992
              c-4.463,6.176-7.752,12.934-9.889,19.967C5.03,47.075,2.34,40.253,2.031,33.339z M11.712,54.093
              c2.021-7.07,5.231-13.871,9.654-20.074c0.479,0.506,0.945,1.021,1.441,1.516c2.351,2.352,4.832,4.488,7.419,6.422
              c-3.73,5.818-5.498,12.527-5.329,19.193C20.114,59.989,15.563,57.634,11.712,54.093z M53.213,53.212
              c-7.156,7.158-17.028,9.934-26.299,8.348c-0.253-6.389,1.382-12.836,4.933-18.424c6.625,4.654,13.896,7.979,21.445,9.994
              C53.265,53.157,53.24,53.187,53.213,53.212z M32.979,41.481c0.974-1.336,2.057-2.619,3.263-3.826
              c6.99-6.988,16.407-10.049,25.538-9.219c0.961,8.076-1.356,16.463-6.953,23.016C47.13,49.53,39.712,46.212,32.979,41.481z"/>
            <g>
              <path fill="#F76D57" d="M22.573,32.38c0.542,0.584,1.08,1.172,1.648,1.74c2.263,2.262,4.648,4.326,7.136,6.188
                c1.034-1.42,2.188-2.783,3.471-4.066c7.302-7.301,17.097-10.568,26.646-9.84c-1.082-5.721-3.833-11.188-8.261-15.615
                c-0.18-0.18-0.366-0.35-0.55-0.523c-8.829,3.189-17.121,8.295-24.198,15.373C26.321,27.778,24.358,30.034,22.573,32.38z"/>
              <path fill="#F76D57" d="M21.206,30.872c1.779-2.311,3.728-4.533,5.845-6.65C34.071,17.2,42.254,12.067,50.973,8.759
                c-8.24-6.744-19.23-8.439-28.855-5.09c-0.271,6.801-2.571,13.533-6.904,19.217C16.979,25.661,18.982,28.329,21.206,30.872z"/>
              <path fill="#F76D57" d="M20.072,4.474c-3.37,1.459-6.53,3.557-9.285,6.312c-0.395,0.395-0.773,0.799-1.141,1.207
                c1.24,3.102,2.721,6.125,4.448,9.047C17.686,16.079,19.678,10.321,20.072,4.474z"/>
              <path fill="#F76D57" d="M12.775,22.743c-1.764-2.902-3.291-5.904-4.582-8.988c-3.939,5.127-5.997,11.23-6.172,17.381
                c3.167-1.521,6.14-3.582,8.766-6.207C11.49,24.226,12.15,23.493,12.775,22.743z"/>
              <path fill="#F76D57" d="M13.879,24.524c-0.536,0.619-1.09,1.23-1.678,1.818c-3.025,3.025-6.482,5.352-10.17,6.996
                c0.309,6.914,2.999,13.736,8.062,19.145c2.137-7.033,5.426-13.791,9.889-19.967C17.727,29.972,15.688,27.302,13.879,24.524z"/>
              <path fill="#F76D57" d="M22.808,35.534c-0.496-0.494-0.963-1.01-1.441-1.516c-4.423,6.203-7.633,13.004-9.654,20.074
                c3.852,3.541,8.402,5.896,13.186,7.057c-0.169-6.666,1.599-13.375,5.329-19.193C27.64,40.022,25.158,37.886,22.808,35.534z"/>
              <path fill="#F76D57" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
                c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
              <path fill="#F76D57" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
                c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
            </g>
            <path opacity="0.2" fill="#231F20" d="M26.914,61.56c9.271,1.586,19.143-1.189,26.299-8.348c0.027-0.025,0.052-0.055,0.079-0.082
              c-7.549-2.016-14.82-5.34-21.445-9.994C28.296,48.724,26.661,55.171,26.914,61.56z"/>
            <path opacity="0.2" fill="#231F20" d="M61.78,28.437c-9.131-0.83-18.548,2.23-25.538,9.219c-1.206,1.207-2.289,2.49-3.263,3.826
              c6.732,4.73,14.15,8.049,21.848,9.971C60.424,44.899,62.741,36.513,61.78,28.437z"/>
            <g opacity="0.2">
              <path fill="#FFFFFF" d="M10.787,10.786c-0.395,0.395-0.773,0.799-1.141,1.207c1.24,3.102,2.721,6.125,4.448,9.047
                c3.591-4.961,5.583-10.719,5.978-16.566C16.702,5.933,13.542,8.03,10.787,10.786z"/>
              <path fill="#FFFFFF" d="M2.021,31.136c3.167-1.521,6.14-3.582,8.766-6.207c0.703-0.703,1.363-1.436,1.988-2.186
                c-1.764-2.902-3.291-5.904-4.582-8.988C4.254,18.882,2.196,24.985,2.021,31.136z"/>
            </g>
          </g>
        </svg>
        </span>
      </div>
      <div className="App-content">
        <div>
          Ant Design Buttons
          <br/><br/>
          <Space>
            <AppButton/>
            <AppButton/>
            <AppButton/>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
