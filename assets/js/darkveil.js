    (function(){
        var c=document.getElementById('dv-bg'),gl=c.getContext('webgl');if(!gl)return;
        var vS='attribute vec2 position;void main(){gl_Position=vec4(position,0,1);}';
        var fS=`precision lowp float;
uniform vec2 uR;uniform float uT,uH,uN,uS,uSF,uW,uLM;
float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}
mat3 r2y=mat3(.299,.587,.114,.596,-.274,-.322,.211,-.523,.312);
mat3 y2r=mat3(1,.956,.621,1,-.272,-.647,1,-1.106,1.703);
vec3 hs(vec3 c,float d){vec3 y=r2y*c;float r=radians(d),co=cos(r),si=sin(r);return clamp(y2r*vec3(y.x,y.y*co-y.z*si,y.y*si+y.z*co),0.,1.);}
vec4 sg(vec4 x){return 1./(1.+exp(-x));}
vec4 buf[8];
vec4 cppn(vec2 co,float i0,float i1,float i2){
buf[6]=vec4(co.x,co.y,.3948+i0,.36+i1);buf[7]=vec4(.14+i2,length(co),0,0);
buf[0]=mat4(vec4(6.54,-3.61,.759,-1.14),vec4(2.46,3.17,1.22,.063),vec4(-5.48,-6.16,1.87,-4.77),vec4(6.04,-5.54,-.909,3.25))*buf[6]+mat4(vec4(.847,-5.72,3.98,1.65),vec4(-.243,.584,-1.77,-5.35),vec4(0,0,0,0),vec4(0,0,0,0))*buf[7]+vec4(.218,1.12,-1.8,5.03);
buf[1]=mat4(vec4(-3.35,-6.06,.556,-4.47),vec4(.863,1.74,5.64,1.61),vec4(2.49,-3.5,1.72,6.36),vec4(3.31,8.21,1.14,-1.17))*buf[6]+mat4(vec4(5.24,-13.03,.01,15.87),vec4(2.99,3.13,-.89,-1.68),vec4(0,0,0,0),vec4(0,0,0,0))*buf[7]+vec4(-5.95,-6.57,-.881,1.54);
buf[0]=sg(buf[0]);buf[1]=sg(buf[1]);
buf[2]=mat4(vec4(-15.22,8.1,-2.43,-1.94),vec4(-5.95,4.31,2.64,1.27),vec4(-7.31,6.73,5.25,5.94),vec4(5.08,8.98,-1.73,-1.16))*buf[6]+mat4(vec4(-11.97,-11.61,6.15,11.24),vec4(2.12,-6.26,-1.71,-.7),vec4(0,0,0,0),vec4(0,0,0,0))*buf[7]+vec4(-4.17,-3.23,-4.58,-3.64);
buf[3]=mat4(vec4(3.18,-13.74,1.88,3.23),vec4(.643,12.77,1.91,.51),vec4(-.049,4.48,1.47,1.8),vec4(5,13,3.4,-4.56))*buf[6]+mat4(vec4(-.129,7.72,-3.14,4.74),vec4(.639,3.71,-.811,-.392),vec4(0,0,0,0),vec4(0,0,0,0))*buf[7]+vec4(-1.18,-21.62,.785,1.23);
buf[2]=sg(buf[2]);buf[3]=sg(buf[3]);
buf[4]=mat4(vec4(5.21,-7.18,2.72,2.66),vec4(-5.6,-25.36,4.07,.46),vec4(-10.58,24.29,21.1,37.55),vec4(4.3,-1.96,2.35,-1.37))*buf[0]+mat4(vec4(-17.65,-10.51,2.26,12.46),vec4(6.27,-502.75,-12.64,.911),vec4(-10.98,20.74,-9.7,-.764),vec4(5.38,1.48,-4.19,-4.84))*buf[1]+mat4(vec4(12.79,-16.35,-.399,1.8),vec4(-30.48,-1.83,1.45,-1.11),vec4(19.87,-7.34,-42.94,-98.53),vec4(8.34,-2.73,-2.29,-36.14))*buf[2]+mat4(vec4(-16.3,3.55,-.443,-9.44),vec4(57.51,-35.61,16.16,-4.15),vec4(-.075,-3.87,-7.09,3.15),vec4(-12.56,-7.08,1.49,-.821))*buf[3]+vec4(-7.68,15.93,1.32,-1.67);
buf[5]=mat4(vec4(-1.41,-.373,-3.77,-21.37),vec4(-6.21,-9.36,.925,8.83),vec4(11.46,-22.35,13.63,-18.69),vec4(-.343,-3.99,-2.46,-.45))*buf[0]+mat4(vec4(7.35,-4.37,-6.3,-3.87),vec4(1.55,6.55,1.97,-.583),vec4(6.59,-2.22,3.71,-1.37),vec4(-5.8,10.13,-2.34,-5.97))*buf[1]+mat4(vec4(-2.51,-6.67,-1.4,-.163),vec4(-.379,.537,4.39,-1.3),vec4(-.706,2.01,-5.17,-3.73),vec4(-13.56,10.49,-.917,-2.65))*buf[2]+mat4(vec4(-8.65,6.55,-6.39,-5.59),vec4(-.578,-1.08,36.91,5.74),vec4(14.28,3.71,7.15,-4.6),vec4(2.72,3.6,-4.37,-2.37))*buf[3]+vec4(-5.9,-4.33,1.24,8.6);
buf[4]=sg(buf[4]);buf[5]=sg(buf[5]);
buf[6]=mat4(vec4(-1.61,.797,1.47,.209),vec4(-28.79,-7.14,1.5,4.66),vec4(-10.95,39.66,.743,-10.1),vec4(-.723,-1.55,.73,2.17))*buf[0]+mat4(vec4(3.25,21.49,-1.02,-3.31),vec4(-3.73,-3.38,-7.22,-.237),vec4(13.18,.792,5.34,5.69),vec4(-4.17,-17.8,-6.82,-1.65))*buf[1]+mat4(vec4(.605,-7.8,-7.21,-2.74),vec4(-3.52,-.124,-.526,.439),vec4(9.68,-22.85,2.06,.1),vec4(-4.32,-17.73,2.52,5.3))*buf[2]+mat4(vec4(-6.55,-15.79,-6.04,-5.42),vec4(-43.59,28.55,-16,18.85),vec4(4.21,8.39,3.1,8.66),vec4(-5.02,-4.45,-4.48,-5.5))*buf[3]+mat4(vec4(1.7,-67.06,6.9,1.9),vec4(1.87,2.39,2.52,4.08),vec4(11.16,1.73,2.07,7.39),vec4(-4.26,-306.25,8.26,-17.13))*buf[4]+mat4(vec4(1.69,-4.59,3.85,-6.35),vec4(1.35,-1.26,9.93,2.91),vec4(-5.28,.072,-.14,3.33),vec4(28.35,-4.92,6.1,4.09))*buf[5]+vec4(6.68,12.52,-3.71,-4.1);
buf[7]=mat4(vec4(-8.27,-4.7,5.1,.751),vec4(8.65,-17.16,16.52,-8.88),vec4(-4.04,-2.39,-2.61,-1.99),vec4(-2.22,-1.81,-5.98,4.88))*buf[0]+mat4(vec4(6.78,3.51,-2.82,-2.7),vec4(-5.74,-.278,1.5,-5.05),vec4(13.12,15.74,-2.94,-4.1),vec4(-14.38,-5.03,-6.26,2.98))*buf[1]+mat4(vec4(4.1,-.94,-5.67,4.76),vec4(4.38,4.83,1.74,-3.44),vec4(2.12,.163,-104.56,16.95),vec4(-5.23,-2.99,3.84,-1.94))*buf[2]+mat4(vec4(-5.9,1.79,-13.6,-3.81),vec4(6.66,31.91,25.16,91.81),vec4(11.84,4.15,-.731,6.77),vec4(-6.4,4.03,6.17,-.329))*buf[3]+mat4(vec4(3.5,-196.92,-8.92,2.81),vec4(3.48,-3.18,5.17,5.18),vec4(-2.4,15.59,1.29,2.03),vec4(-71.25,-62.44,-8.14,.507))*buf[4]+mat4(vec4(-12.29,-11.18,-7.35,4.39),vec4(10.81,5.63,-.939,-4.73),vec4(-12.87,-7.04,5.3,7.54),vec4(1.46,8.92,3.51,5.84))*buf[5]+vec4(2.24,-6.71,-.989,-2.12);
buf[6]=sg(buf[6]);buf[7]=sg(buf[7]);
buf[0]=mat4(vec4(1.68,1.38,2.96,0),vec4(-1.88,-1.48,-3.59,0),vec4(-1.33,-1.09,-2.31,0),vec4(.266,.232,.442,0))*buf[0]+mat4(vec4(-.63,-.595,-.913,0),vec4(.178,.183,.182,0),vec4(-2.97,-2.58,-4.9,0),vec4(1.42,1.19,2.52,0))*buf[1]+mat4(vec4(-1.26,-1.06,-2.17,0),vec4(-.72,-.527,-1.44,0),vec4(.153,.152,.273,0),vec4(.946,.886,1.28,0))*buf[2]+mat4(vec4(-2.42,-1.97,-4.35,0),vec4(-22.68,-18.05,-41.95,0),vec4(.638,.547,1.11,0),vec4(-1.55,-1.31,-2.64,0))*buf[3]+mat4(vec4(-.493,-.399,-.914,0),vec4(.956,.792,1.64,0),vec4(.306,.157,.864,0),vec4(1.18,.945,2.18,0))*buf[4]+mat4(vec4(.354,.329,.595,0),vec4(-.588,-.482,-1.06,0),vec4(2.53,2,.68,0),vec4(.13,.089,.302,0))*buf[5]+mat4(vec4(-1.77,-1.4,-3.34,0),vec4(3.17,2.64,5.38,0),vec4(-3.17,-2.61,-5.55,0),vec4(-2.85,-2.25,-5.3,0))*buf[6]+mat4(vec4(1.52,1.22,2.84,0),vec4(1.52,1.27,2.68,0),vec4(2.98,2.44,5.23,0),vec4(2.23,1.88,3.8,0))*buf[7]+vec4(-1.55,-3.62,.248,0);
buf[0]=sg(buf[0]);return vec4(buf[0].xyz,1);}
void main(){vec2 uv=gl_FragCoord.xy/uR*2.-1.;uv.y*=-1.;
uv+=uW*vec2(sin(uv.y*6.283+uT*.5),cos(uv.x*6.283+uT*.5))*.05;
vec4 col=cppn(uv,.1*sin(.3*uT),.1*sin(.69*uT),.1*sin(.44*uT));
col.rgb=hs(col.rgb,uH);
float sl=sin(gl_FragCoord.y*uSF)*.5+.5;col.rgb*=1.-sl*sl*uS;
col.rgb+=(rand(gl_FragCoord.xy+uT)-.5)*uN;
float lum=dot(col.rgb,vec3(.299,.587,.114));
gl_FragColor=uLM>0.5?vec4(clamp(col.rgb*1.8,0.,1.),smoothstep(0.05,0.35,lum)):vec4(clamp(col.rgb,0.,1.),1.);}`;
        function cs(t,s){var sh=gl.createShader(t);gl.shaderSource(sh,s);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS))console.error(gl.getShaderInfoLog(sh));return sh;}
        var pg=gl.createProgram();gl.attachShader(pg,cs(gl.VERTEX_SHADER,vS));gl.attachShader(pg,cs(gl.FRAGMENT_SHADER,fS));gl.linkProgram(pg);gl.useProgram(pg);
        var bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
        var pl=gl.getAttribLocation(pg,'position');gl.enableVertexAttribArray(pl);gl.vertexAttribPointer(pl,2,gl.FLOAT,false,0,0);
        var uT=gl.getUniformLocation(pg,'uT'),uR=gl.getUniformLocation(pg,'uR'),uH=gl.getUniformLocation(pg,'uH'),uN=gl.getUniformLocation(pg,'uN'),uS=gl.getUniformLocation(pg,'uS'),uSF=gl.getUniformLocation(pg,'uSF'),uW=gl.getUniformLocation(pg,'uW'),uLM=gl.getUniformLocation(pg,'uLM');
        gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
        var t0=performance.now();
        function resize(){var dpr=Math.min(window.devicePixelRatio,2);c.width=window.innerWidth*dpr;c.height=window.innerHeight*dpr;gl.viewport(0,0,c.width,c.height);}
        window.addEventListener('resize',resize);resize();
        (function loop(){requestAnimationFrame(loop);var t=(performance.now()-t0)/1000*1.2;
        var isLight=!document.documentElement.classList.contains('dark')?1.0:0.0;
        gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
        gl.uniform1f(uT,t);gl.uniform2f(uR,c.width,c.height);gl.uniform1f(uH,35);gl.uniform1f(uN,0);gl.uniform1f(uS,0);gl.uniform1f(uSF,.5);gl.uniform1f(uW,2.3);gl.uniform1f(uLM,isLight);
        gl.drawArrays(gl.TRIANGLE_STRIP,0,4);})();
    })();
