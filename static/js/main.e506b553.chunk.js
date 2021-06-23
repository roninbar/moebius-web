(this.webpackJsonpmobius=this.webpackJsonpmobius||[]).push([[0],{15:function(r,t,o){r.exports=o(22)},20:function(r,t,o){},21:function(r,t,o){},22:function(r,t,o){"use strict";o.r(t);var e,a,i,n,u=o(1),c=o.n(u),f=o(6),l=o.n(f),m=o(2),s=o(7),h=o(4),v=o(0),p=(o(20),String.raw),g=[.85,.8,.75],d=[0,0,0],M=[0,0,1],b=[0,.75,0],x=[1,0,0],E=[1,.8,.5],T=[.75,.75,.75],C=[1,1,1],P=[.25,.25,.25],y=[.5,.5,.5],A=[y,y,y,y],R=.1,w=Math.PI/36;function I(){var r=Object(u.useState)(0),t=Object(h.a)(r,2),o=t[0],f=t[1],l=Object(u.useState)(),s=Object(h.a)(l,2),y=s[0],A=s[1],I=Object(u.useState)(v.b.create()),B=Object(h.a)(I,2),D=B[0],j=B[1],X=Object(u.useRef)(null),V=Object(u.useRef)(null),z=Object(u.useRef)(null);Object(u.useEffect)((function(){var r,t=null===(r=z.current)||void 0===r?void 0:r.getContext("webgl");if(!t)throw new Error("Failed to get a WebGL context.");X.current=function(r){var t=p(i||(i=Object(m.a)(["\n    // Attributes\n    attribute vec4 ",";\n    attribute vec3 ",";\n    attribute vec2 ",";\n    // Uniforms\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat3 ",";\n    // Varyings\n    varying highp vec3 ",";\n    varying highp vec3 ",";\n    // Program\n    void main(void) {\n      gl_Position = "," * "," * "," * ",";\n      "," = normalize("," * "," * vec4(",", 0)).xyz;\n      "," = "," * vec3(",", 1);\n    }\n  "])),"aPosition","aNormal","aTextureCoords","uProjectionMatrix","uViewMatrix","uModelMatrix","uNormalMatrix","uTextureMatrix","vNormal","vTextureCoords","uProjectionMatrix","uViewMatrix","uModelMatrix","aPosition","vNormal","uViewMatrix","uNormalMatrix","aNormal","vTextureCoords","uTextureMatrix","aTextureCoords"),o=p(n||(n=Object(m.a)(["\n    // Varyings\n    varying highp vec3 ",";\n    varying highp vec3 ",";\n    // Uniforms\n    uniform highp vec4 ",";\n    uniform highp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp float ",";\n    uniform sampler2D ",";\n    // Program\n    void main(void) {\n      // Apply lighting\n      highp vec3 u = normalize(","); // Light direction\n      highp vec3 v = 2.0 * dot(u, ",") * "," - u; // Reflection direction\n      lowp float Id = max(0.0, (gl_FrontFacing ? +1.0 : -1.0) * dot(u, ",")); // Diffuse intensity\n      lowp float Is = v[2] < 0.0 ? 0.0 : pow(v[2], ","); // Specular intensity\n      gl_FragColor = "," * texture2D(",", ",".xy) * vec4("," + Id * ",", 1.0) + Is * vec4(",", 1.0);\n    }\n  "])),"vNormal","vTextureCoords","uColor","uLightDirection","uCa","uCd","uCs","uSpecularity","uSampler","uLightDirection","vNormal","vNormal","vNormal","uSpecularity","uColor","uSampler","vTextureCoords","uCa","uCd","uCs"),e=O(r,t,o);return{program:e,attribs:{position:r.getAttribLocation(e,"aPosition"),normal:r.getAttribLocation(e,"aNormal"),textureCoords:r.getAttribLocation(e,"aTextureCoords")},uniforms:{matrices:{projection:G(r,e,"uProjectionMatrix"),view:G(r,e,"uViewMatrix"),model:G(r,e,"uModelMatrix"),normal:G(r,e,"uNormalMatrix"),texture:G(r,e,"uTextureMatrix")},light:{direction:G(r,e,"uLightDirection"),ambientColor:G(r,e,"uCa"),diffuseColor:G(r,e,"uCd"),specularColor:G(r,e,"uCs"),specularity:G(r,e,"uSpecularity")},sampler:G(r,e,"uSampler"),color:G(r,e,"uColor")}}}(t),V.current=function(r){var t=p(e||(e=Object(m.a)(["\n    // Uniforms\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform mat4 ",";\n    uniform lowp vec4 ",";\n    // Attributes\n    attribute vec4 ",";\n    attribute vec3 ",";\n    // Varyings\n    varying highp vec3 ",";\n    // Program\n    void main(void) {\n      "," = normalize("," * "," * vec4(",", 0)).xyz;\n      gl_Position = "," * "," * "," * ",";\n    }\n  "])),"uModelMatrix","uNormalMatrix","uViewMatrix","uProjectionMatrix","uColor","aPosition","aNormal","vNormal","vNormal","uViewMatrix","uNormalMatrix","aNormal","uProjectionMatrix","uViewMatrix","uModelMatrix","aPosition"),o=p(a||(a=Object(m.a)(["\n    // Uniforms\n    uniform highp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp vec3 ",";\n    uniform lowp float ",";\n    uniform lowp vec4 ",";\n    // Varyings\n    varying highp vec3 ",";\n    // Program\n    void main(void) {\n      // Apply lighting\n      highp vec3 u = normalize(",");\n      highp vec3 v = 2.0 * dot(u, ",") * "," - u; // Reflection direction\n      lowp float Id = max(0.0, (gl_FrontFacing ? +1.0 : -1.0) * dot(u, ",")); // Diffuse intensity\n      lowp float Is = v[2] < 0.0 ? 0.0 : pow(v[2], ","); // Specular intensity\n      gl_FragColor = "," * vec4("," + Id * ",", 1.0) + Is * vec4(",", 1.0);\n    }\n  "])),"uLightDirection","uCa","uCd","uCs","uSpecularity","uColor","vNormal","uLightDirection","vNormal","vNormal","vNormal","uSpecularity","uColor","uCa","uCd","uCs"),i=O(r,t,o);return{program:i,attribs:{position:r.getAttribLocation(i,"aPosition"),normal:r.getAttribLocation(i,"aNormal")},uniforms:{matrices:{projection:G(r,i,"uProjectionMatrix"),view:G(r,i,"uViewMatrix"),model:G(r,i,"uModelMatrix"),normal:G(r,i,"uNormalMatrix")},light:{direction:G(r,i,"uLightDirection"),ambientColor:G(r,i,"uCa"),diffuseColor:G(r,i,"uCd"),specularColor:G(r,i,"uCs"),specularity:G(r,i,"uSpecularity")},color:G(r,i,"uColor")}}}(t);var o=X.current,u=o.program,c=o.uniforms,l=V.current,s=l.program,h=l.uniforms;t.useProgram(u),t.uniform3fv(c.light.direction,g),t.uniform3fv(c.light.ambientColor,P),t.uniform3fv(c.light.diffuseColor,C),t.uniform3fv(c.light.specularColor,C),t.uniform1f(c.light.specularity,10),t.useProgram(s),t.uniform3fv(h.light.direction,g),t.uniform3fv(h.light.ambientColor,P),t.uniform3fv(h.light.diffuseColor,C),t.uniform3fv(h.light.specularColor,C),t.uniform1f(h.light.specularity,10);for(var v=0,d=[t.TEXTURE0,t.TEXTURE1,t.TEXTURE2,t.TEXTURE3];v<d.length;v++){var M=d[v];_(t,M,"".concat("/mobius","/texture/hours").concat(M-t.TEXTURE0,".bmp"))}_(t,t.TEXTURE10,"".concat("/mobius","/texture/mobius.png")),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clearDepth(1),t.clearColor(0,0,0,1),t.enable(t.CULL_FACE),t.cullFace(t.BACK);var b=requestAnimationFrame((function r(t){var o=new Date;f(((o.getSeconds()/60+o.getMinutes())/60+o.getHours())/6*Math.PI),b=requestAnimationFrame(r)}));return function(){cancelAnimationFrame(b)}}),[]),Object(u.useEffect)((function(){var r,t=null===(r=z.current)||void 0===r?void 0:r.getContext("webgl");if(!t)throw new Error("Failed to get a WebGL context.");if(!X.current||!V.current)throw new Error("Missing shader program!");var e=X.current,a=e.program,i=e.attribs,n=e.uniforms,u=V.current,c=u.program,f=u.attribs,l=u.uniforms,m=v.b.perspective(v.b.create(),Math.PI/5,t.canvas.width/t.canvas.height,.1,100),s=v.b.fromTranslation(v.b.create(),[0,0,-4]),h=v.a.create();t.useProgram(a),t.uniformMatrix4fv(n.matrices.projection,!1,m),t.uniformMatrix4fv(n.matrices.view,!1,s),t.useProgram(c),t.uniformMatrix4fv(l.matrices.projection,!1,m),t.uniformMatrix4fv(l.matrices.view,!1,s);var p=function(r){var o=r.topology,e=r.positionBuffer,a=r.normalBuffer,i=r.colorBuffer;try{U(t,o,f.position,e,f.normal,a)}finally{i&&t.deleteBuffer(i),a&&t.deleteBuffer(a),e&&t.deleteBuffer(e)}},y=function(r){var o=r.topology,e=r.positionBuffer,a=r.normalBuffer,n=r.colorBuffer,u=r.textureCoordBuffer;try{U(t,o,i.position,e,i.normal,a,i.textureCoords,u)}finally{u&&t.deleteBuffer(u),n&&t.deleteBuffer(n),a&&t.deleteBuffer(a),e&&t.deleteBuffer(e)}};t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.cullFace(t.FRONT),t.useProgram(c),t.uniformMatrix4fv(l.matrices.model,!1,v.b.scale(v.b.create(),D,[1.2,1.2,1])),t.uniformMatrix4fv(l.matrices.normal,!1,v.b.scale(v.b.create(),D,[1/1.2,1/1.2,1])),p(L(t)),t.cullFace(t.BACK);var A=v.b.translate(v.b.create(),D,[0,0,-R]),I=v.a.scale(v.a.create(),v.a.translate(v.a.create(),h,[.5,.5]),[.75,-.75]);t.useProgram(a),t.uniform4fv(n.color,[].concat(C,[1])),t.uniform3fv(n.light.direction,g),t.uniform3fv(n.light.ambientColor,P),t.uniform3fv(n.light.diffuseColor,C),t.uniform3fv(n.light.specularColor,d),t.uniform1f(n.light.specularity,10),t.uniformMatrix4fv(n.matrices.model,!1,v.b.scale(v.b.create(),A,[1.199,1.199,1])),t.uniformMatrix4fv(n.matrices.normal,!1,v.b.scale(v.b.create(),A,[1/1.2,1/1.2,1])),t.uniformMatrix3fv(n.matrices.texture,!1,I),t.uniform1i(n.sampler,10),y(function(r){for(var t=[],o=[0,0,0],e=[].concat(T),a=[0,0,1],i=[0,0],n=0,u=1,c=0;c<2*Math.PI+.001;c+=w,u++){var f=1*Math.cos(c),l=1*Math.sin(c);o.push(f,l,0),a.push(0,0,1),e.push.apply(e,T),i.push(f/1,l/1)}return t.push({mode:r.TRIANGLE_FAN,first:n,count:u-n}),n=u,{topology:t,positionBuffer:S(r,o),normalBuffer:S(r,a),colorBuffer:S(r,e),textureCoordBuffer:S(r,i)}}(t)),t.useProgram(a),t.uniform3fv(n.light.direction,g),t.uniform3fv(n.light.ambientColor,P),t.uniform3fv(n.light.diffuseColor,C),t.uniform3fv(n.light.specularColor,C),t.uniform1f(n.light.specularity,12),t.uniform4fv(n.color,[].concat(E,[1])),t.uniformMatrix4fv(n.matrices.model,!1,D),t.uniformMatrix3fv(n.matrices.texture,!1,h);for(var _=0;_<4;_++)t.uniform1i(n.sampler,_),y(F(t,o,_));t.useProgram(c),t.uniform3fv(l.light.direction,g),t.uniform3fv(l.light.ambientColor,P),t.uniform3fv(l.light.diffuseColor,C),t.uniform3fv(l.light.specularColor,d);var B=function(r,o,e,a){var i=v.b.rotateZ(v.b.create(),D,-a);t.uniformMatrix4fv(l.matrices.model,!1,i),t.uniformMatrix4fv(l.matrices.normal,!1,i),p(function(r,t,o,e){return{topology:[{mode:r.TRIANGLE_STRIP,first:0,count:4}],positionBuffer:S(r,[-o,-.2*e,t,+o,-.2*e,t,-o,e,t,+o,e,t]),normalBuffer:S(r,[0,0,1,0,0,1,0,0,1,0,0,1]),colorBuffer:S(r,[].concat(T,T,T,T))}}(t,r,o,e))};t.uniform1f(l.light.specularity,1),t.uniform4fv(l.color,[].concat(M,[1])),B(.01,.02,.6,o),t.uniform4fv(l.color,[].concat(b,[1])),B(.02,.02,.8,12*o),t.uniform4fv(l.color,[].concat(x,[1])),B(.03,.01,.85,12*o*60),t.useProgram(c),t.uniformMatrix4fv(l.matrices.model,!1,D),t.uniformMatrix4fv(l.matrices.normal,!1,D),t.uniform3fv(l.light.specularColor,C),t.uniform1f(l.light.specularity,10),t.uniform4fv(l.color,[].concat(x,[1])),p(function(r,t){for(var o=.05,e=.01,a=Math.sqrt(o*o+e*e),i=o/a,n=e/a,u=[0,0,t+e],c=[0,0,1],f=[].concat(T),l=0;l<2*Math.PI;l+=Math.PI/30)u.push(o*Math.cos(l),o*Math.sin(l),t),c.push(n*Math.cos(l),n*Math.sin(l),i),f.push.apply(f,T);var m=u.length/3;return{topology:[{mode:r.TRIANGLE_FAN,first:0,count:m}],positionBuffer:S(r,u),normalBuffer:S(r,c),colorBuffer:S(r,f)}}(t,.03)),t.useProgram(c),t.uniform4fv(l.color,[].concat(E,[1])),t.uniform1f(l.light.specularity,32);var j=v.b.rotateX(v.b.create(),v.b.translate(v.b.create(),D,[0,0,-R]),Math.PI);t.useProgram(c),t.uniformMatrix4fv(l.matrices.model,!1,v.b.scale(v.b.create(),j,[1.2,1.2,.24])),t.uniformMatrix4fv(l.matrices.normal,!1,v.b.scale(v.b.create(),j,[1/1.2,1/1.2,1/.24])),p(N(t)),t.useProgram(c),t.uniformMatrix4fv(l.matrices.model,!1,v.b.scale(v.b.create(),D,[1.2,1.2,1])),t.uniformMatrix4fv(l.matrices.normal,!1,v.b.scale(v.b.create(),D,[1/1.2,1/1.2,1])),p(L(t));var O=v.b.translate(v.b.create(),D,[0,0,.1]);t.useProgram(c),t.uniformMatrix4fv(l.matrices.model,!1,v.b.scale(v.b.create(),O,[1.2,1.2,.24])),t.uniformMatrix4fv(l.matrices.normal,!1,v.b.scale(v.b.create(),O,[1/1.2,1/1.2,1/.24])),t.uniform4fv(l.color,[].concat(C,[.125])),t.uniform1f(l.light.specularity,128),p(N(t))}),[o,D]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("canvas",{width:"768px",height:"768px",ref:z,onPointerDown:function(r){var t=r.currentTarget,o=r.pointerId,e=r.clientX,a=r.clientY;t.setPointerCapture(o),A({x:e,y:a})},onPointerMove:function(r){var t=r.clientX,o=r.clientY;if(y){var e=t-y.x,a=o-y.y,i=Math.sqrt(e*e+a*a);if(i>0){var n=v.b.fromRotation(v.b.create(),.01*i,[a,e,0]);j(v.b.mul(v.b.create(),n,D)),A({x:t,y:o})}}},onPointerUp:function(r){var t=r.currentTarget,o=r.pointerId;A(null),t.releasePointerCapture(o)}}),c.a.createElement("p",null,"M\xf6bius Clock")))}function _(r,t,o){var e=r.createTexture();r.activeTexture(t),r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,new Uint8Array([255,255,255,255]));var a=new Image;return a.onload=function(){r.activeTexture(t),r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),B(a.width)&&B(a.height)?(r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR)):r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR)},a.src=o,e}function B(r){return 0===(r&r-1)}function N(r){for(var t=[],o=[0,0,1],e=[0,0,1],a=[].concat(E),i=0,n=1,u=1*Math.sin(w),c=1*Math.cos(w),f=-Math.PI;f<Math.PI+.001;f+=w,n++){var l=u*Math.cos(f),m=u*Math.sin(f);o.push(l,m,c),e.push(l,m,c),a.push.apply(a,E)}t.push({mode:r.TRIANGLE_FAN,first:i,count:n-i}),i=n;for(var s=w;s<.5*Math.PI-.001;s+=w){for(var h=1*Math.sin(s),v=1*Math.sin(s+w),p=1*Math.cos(s),g=1*Math.cos(s+w),d=-Math.PI;d<Math.PI+.001;d+=w,n+=2){var M=h*Math.cos(d),b=v*Math.cos(d),x=h*Math.sin(d),T=v*Math.sin(d);o.push(M,x,p),e.push(M,x,p),a.push.apply(a,E),o.push(b,T,g),e.push(b,T,g),a.push.apply(a,E)}t.push({mode:r.TRIANGLE_STRIP,first:i,count:n-i}),i=n}return{topology:t,positionBuffer:S(r,o),normalBuffer:S(r,e),colorBuffer:S(r,a)}}function L(r){for(var t=[],o=[],e=[],a=[],i=0;i<2*Math.PI+.001;i+=w)o.push(1*Math.cos(i),1*Math.sin(i),.1),e.push(Math.cos(i),Math.sin(i),0),a.push.apply(a,E),o.push(1*Math.cos(i),1*Math.sin(i),-R),e.push(Math.cos(i),Math.sin(i),0),a.push.apply(a,E);return t.push({mode:r.TRIANGLE_STRIP,first:0,count:o.length/3}),{topology:t,positionBuffer:S(r,o),normalBuffer:S(r,e),colorBuffer:S(r,a)}}function F(r,t,o){var e=function(r,t){for(var o=[],e=[],a=[],i=[],n=0;n<1.001;n+=.033333){var u=(t+n)*Math.PI,c=1.5*(u-r),f=Math.cos(u),l=Math.sin(u),m=Math.cos(c),s=Math.sin(c),h=1+R*Math.cos(c),v=1-R*Math.cos(c);e.push(h*Math.sin(u),h*Math.cos(u),-R*Math.sin(c)),e.push(v*Math.sin(u),v*Math.cos(u),.1*Math.sin(c)),a.push(-l*s,-f*s,f*f*m+m*l*l),a.push(-l*s,-f*s,f*f*m+m*l*l);for(var p=[0,0,0],g=0;g<3;g++)p[g]=(1-n)*A[t][g]+n*A[(t+1)%A.length][g];i.push.apply(i,p.concat(p)),o.push(n,0,n,1)}return{positions:e,normals:a,colors:i,textureCoords:o}}(t,o),a=e.positions,i=e.normals,n=e.colors,u=e.textureCoords;return{topology:[{mode:r.TRIANGLE_STRIP,first:0,count:a.length/3}],positionBuffer:S(r,a),normalBuffer:S(r,i),colorBuffer:S(r,n),textureCoordBuffer:S(r,u)}}function S(r,t){var o=r.createBuffer();if(!o)throw new Error("Failed to create buffer.");return r.bindBuffer(r.ARRAY_BUFFER,o),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW),o}function U(r,t,o,e,a,i,n,u){D(r,o,e,3,r.FLOAT),i&&"number"===typeof a&&D(r,a,i,3,r.FLOAT),u&&"number"===typeof n&&D(r,n,u,2,r.FLOAT);try{var c,f=Object(s.a)(t);try{for(f.s();!(c=f.n()).done;){var l=c.value,m=l.mode,h=l.first,v=l.count;r.drawArrays(m,h,v)}}catch(p){f.e(p)}finally{f.f()}}finally{u&&"number"===typeof n&&j(r,n),i&&"number"===typeof a&&j(r,a),j(r,o)}}function D(r,t,o,e,a){r.bindBuffer(r.ARRAY_BUFFER,o),r.vertexAttribPointer(t,e,a,!1,0,0),r.enableVertexAttribArray(t)}function j(r,t){r.disableVertexAttribArray(t)}function O(r,t,o){var e=r.createProgram();if(!e)throw new Error("Failed to create program.");if(r.attachShader(e,X(r,r.VERTEX_SHADER,t)),r.attachShader(e,X(r,r.FRAGMENT_SHADER,o)),r.linkProgram(e),!r.getProgramParameter(e,r.LINK_STATUS)){var a="Unable to initialize the shader program: ".concat(r.getProgramInfoLog(e));throw r.deleteProgram(e),new Error(a)}return e}function X(r,t,o){var e=r.createShader(t);if(!e)throw new Error("Failed to create shader.");if(r.shaderSource(e,o),r.compileShader(e),!r.getShaderParameter(e,r.COMPILE_STATUS)){var a="An error occurred compiling the shaders: ".concat(r.getShaderInfoLog(e));throw r.deleteShader(e),new Error(a)}return e}function G(r,t,o){return r.getUniformLocation(t,o)||function(r){throw new Error(r)}('No uniform named "'.concat(o,'" was found.'))}o(21);l.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e506b553.chunk.js.map