    (function(){
        ['type-name','type-subtitle','type-tagline'].forEach(function(id){var e=document.getElementById(id);if(e)e.textContent='';});
        document.documentElement.classList.remove('js-typing');
        function randSpeed(idx){var min=idx===0?5:3,max=idx===0?120:50;return Math.random()*(max-min)+min;}
        var _typeTimer=null;

        function typeText(el,cur,text,idx,cb){
            el.textContent='';
            cur.style.display='inline';
            var i=0;
            function next(){
                if(_typeTimer)clearTimeout(_typeTimer);
                if(i<text.length){el.textContent+=text[i];i++;_typeTimer=setTimeout(next,randSpeed(idx));}
                else if(cb)cb();
            }
            next();
        }

        function typeLine(lines,idx){
            if(idx>=lines.length)return;
            var line=lines[idx],el=document.getElementById(line.el),cur=document.getElementById(line.cursor);
            if(!el||!cur)return;
            if(idx>0){var prev=document.getElementById(lines[idx-1].cursor);if(prev)prev.style.display='none';}
            typeText(el,cur,line.text,idx,function(){
                if(idx<lines.length-1)setTimeout(function(){typeLine(lines,idx+1);},400);
            });
        }

        // Expose re-type function for language switching
        window._retypeHeader=function(subtitle,tagline){
            if(_typeTimer)clearTimeout(_typeTimer);
            var subEl=document.getElementById('type-subtitle'),subCur=document.getElementById('cursor-subtitle');
            var tagEl=document.getElementById('type-tagline'),tagCur=document.getElementById('cursor-tagline');
            // Clear both and hide cursors
            subEl.textContent='';
            tagEl.textContent='';
            if(tagCur)tagCur.style.display='none';
            typeText(subEl,subCur,subtitle,1,function(){
                subCur.style.display='none';
                typeText(tagEl,tagCur,tagline,2,null);
            });
        };

        // Initial typing on page load
        setTimeout(function(){
            var lines=[
                {el:'type-name',cursor:'cursor-name',text:'Luís Pedro Coreixo Fialho'},
                {el:'type-subtitle',cursor:'cursor-subtitle',text:'Projetista Fotovoltaico | Especialista em Modelação 3D e Automação'},
                {el:'type-tagline',cursor:'cursor-tagline',text:'Crio Soluções, Resolvo Problemas'}
            ];
            typeLine(lines,0);
        },300);
    })();
