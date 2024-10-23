(()=>{"use strict";var e={1343:(e,t,C)=>{C(3792),C(3362),C(9085),C(9391);var n=C(5130),o=C(6768),l=C(144),a=(C(2892),C(4232));const r=(0,o.pM)({__name:"contextMenu",props:{display:{type:Boolean,required:!0},top:{type:Number,required:!0},left:{type:Number,required:!0}},emits:["close"],setup:function(e,t){var C=t.emit,n=C,r=(0,l.KR)(),u=(0,l.KR)(),i=(0,l.KR)(),s=e;function c(){n("close")}return(0,o.nT)((function(){if(r.value&&(r.value.focus(),0!==s.left&&0!==s.top)){var e=r.value.getBoundingClientRect();if(e){var t=window.innerHeight;s.top+e.height>t?i.value=e.height-s.top:i.value=s.top;var C=window.innerWidth;s.left+e.width>C?u.value=C-e.width:u.value=s.left}}})),function(t,C){return e.display?((0,o.uX)(),(0,o.CE)("div",{key:0,class:"context-menu",ref_key:"context",ref:r,style:(0,a.Tr)({top:i.value+"px",left:u.value+"px"}),tabindex:"0",onBlur:C[0]||(C[0]=function(e){return c()})},[(0,o.RG)(t.$slots,"default")],36)):(0,o.Q3)("",!0)}}});var u=C(1241);const i=(0,u.A)(r,[["__scopeId","data-v-4b9e74b5"]]),s=i;var c={class:"content"},L={class:"header"},p=["src"],v={class:"project-info"},d=["src"],f=["src"],k=["src"],h={key:0},m={key:1},w={class:"navigation__links"};const g=(0,o.pM)({__name:"MenuTop",props:{isOpen:{type:Boolean}},emits:["open"],setup:function(e,t){t.emit;var n=(0,l.KR)(""),a=(0,l.KR)(0),r=(0,l.KR)(0),u=(0,l.KR)(!1);function i(e){a.value=e.pageY||e.clientY,r.value=e.pageX||e.clientX,u.value=!0}function g(e){a.value=0,r.value=0,u.value=!1,n.value=""}return function(e,t){var l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",L,[e.isOpen?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("img",{key:0,class:"open-menu",src:C(145),onClick:t[0]||(t[0]=function(t){return e.$emit("open")})},null,8,p)),(0,o.Lk)("div",v,[t[4]||(t[4]=(0,o.Lk)("div",null,"Проект 1",-1)),(0,o.Lk)("div",null,[(0,o.Lk)("img",{class:"update-but",src:C(6655)},null,8,d),t[3]||(t[3]=(0,o.Lk)("p",null,"Обновлено 18.10.2024 в 10:11",-1))])]),(0,o.Lk)("button",{class:"create-project",onClick:t[1]||(t[1]=function(e){i(e),n.value="project"})},[(0,o.Lk)("img",{src:C(4876)},null,8,f),t[5]||(t[5]=(0,o.eW)(" Новый проект "))])]),(0,o.Lk)("div",{class:"account-but",onClick:t[2]||(t[2]=function(e){i(e),n.value="account"})},[(0,o.Lk)("img",{src:C(5291)},null,8,k)])]),(0,o.bF)(s,{class:"contextMenu",display:u.value,top:a.value,left:r.value,onClose:g},{default:(0,o.k6)((function(){return["project"===n.value?((0,o.uX)(),(0,o.CE)("div",h,"sss")):"account"===n.value?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("ul",w,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"settingAccount"}},{default:(0,o.k6)((function(){return t[6]||(t[6]=[(0,o.Lk)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("mask",{id:"path-1-inside-1_337_373",fill:"white"},[(0,o.Lk)("path",{d:"M7.9993 5.33304C7.26145 5.33304 6.55381 5.61408 6.03206 6.11435C5.51032 6.61461 5.2172 7.29312 5.2172 8.0006C5.2172 8.70808 5.51032 9.38658 6.03206 9.88684C6.55381 10.3871 7.26145 10.6682 7.9993 10.6682C8.73716 10.6682 9.4448 10.3871 9.96655 9.88684C10.4883 9.38658 10.7814 8.70808 10.7814 8.0006C10.7814 7.29312 10.4883 6.61461 9.96655 6.11435C9.4448 5.61408 8.73716 5.33304 7.9993 5.33304ZM6.60825 8.0006C6.60825 7.64686 6.75481 7.3076 7.01568 7.05747C7.27656 6.80734 7.63037 6.66682 7.9993 6.66682C8.36823 6.66682 8.72205 6.80734 8.98292 7.05747C9.2438 7.3076 9.39035 7.64686 9.39035 8.0006C9.39035 8.35434 9.2438 8.69359 8.98292 8.94372C8.72205 9.19385 8.36823 9.33438 7.9993 9.33438C7.63037 9.33438 7.27656 9.19385 7.01568 8.94372C6.75481 8.69359 6.60825 8.35434 6.60825 8.0006ZM11.6411 3.19633C11.3846 3.24078 11.1202 3.18624 10.9055 3.04458C10.6908 2.90292 10.5432 2.68564 10.4948 2.44007L10.1332 0.551443C10.1161 0.45918 10.0705 0.373967 10.0023 0.306886C9.9341 0.239805 9.8464 0.193961 9.75064 0.175317C8.59534 -0.0584391 7.40188 -0.0584391 6.24658 0.175317C6.15082 0.193961 6.06312 0.239805 5.99489 0.306886C5.92667 0.373967 5.88107 0.45918 5.86404 0.551443L5.50376 2.44007C5.47745 2.57459 5.42105 2.70203 5.33844 2.81364C5.25582 2.92524 5.14896 3.01835 5.02521 3.08655C4.90146 3.15475 4.76377 3.19642 4.62161 3.2087C4.47945 3.22097 4.3362 3.20355 4.20174 3.15765L2.3113 2.5121C2.21946 2.48147 2.12031 2.47715 2.02595 2.49965C1.93159 2.52215 1.8461 2.5705 1.77992 2.63881C0.987951 3.47527 0.389663 4.46303 0.0244146 5.53711C-0.00607345 5.62591 -0.00805284 5.72144 0.0187328 5.81133C0.0455184 5.90122 0.099835 5.98132 0.174648 6.04128L1.70759 7.28302C1.74932 7.31592 1.78688 7.35194 1.82026 7.39106C1.90407 7.48515 1.96766 7.59419 2.00738 7.71192C2.04709 7.82965 2.06214 7.95375 2.05167 8.07708C2.0412 8.2004 2.00541 8.32053 1.94636 8.43055C1.88731 8.54057 1.80616 8.63832 1.70759 8.71817L0.174648 9.95992C0.099835 10.0199 0.0455184 10.1 0.0187328 10.1899C-0.00805284 10.2798 -0.00607345 10.3753 0.0244146 10.4641C0.390075 11.5383 0.988842 12.5261 1.78131 13.3624C1.84749 13.4307 1.93298 13.479 2.02734 13.5015C2.1217 13.524 2.22085 13.5197 2.31269 13.4891L4.20452 12.8435C4.33896 12.7972 4.48233 12.7794 4.62465 12.7914C4.76698 12.8035 4.90487 12.8451 5.02875 12.9134C5.15262 12.9817 5.25952 13.075 5.34203 13.1868C5.42454 13.2987 5.48067 13.4264 5.50654 13.5611L5.86543 15.4498C5.9016 15.6365 6.05323 15.7859 6.24797 15.8245C7.40372 16.0585 8.59767 16.0585 9.75342 15.8245C9.84874 15.8057 9.936 15.76 10.0039 15.6932C10.0719 15.6264 10.1174 15.5416 10.1346 15.4498L10.4962 13.5611C10.5225 13.4266 10.5789 13.2992 10.6616 13.1876C10.7442 13.076 10.851 12.9828 10.9748 12.9146C11.0985 12.8464 11.2362 12.8048 11.3784 12.7925C11.5206 12.7802 11.6638 12.7976 11.7983 12.8435L13.6887 13.4891C13.8765 13.5531 14.0865 13.5024 14.2201 13.3624C15.012 12.5259 15.6103 11.5382 15.9756 10.4641C16.0061 10.3753 16.0081 10.2798 15.9813 10.1899C15.9545 10.1 15.9002 10.0199 15.8254 9.95992L14.2924 8.71817C14.1833 8.63016 14.0955 8.52032 14.0354 8.39637C13.9752 8.27241 13.944 8.13733 13.944 8.0006C13.944 7.86386 13.9752 7.72878 14.0354 7.60483C14.0955 7.48087 14.1833 7.37104 14.2924 7.28302L15.8254 6.04128C15.9002 5.98132 15.9545 5.90122 15.9813 5.81133C16.0081 5.72144 16.0061 5.62591 15.9756 5.53711C15.6095 4.4628 15.0103 3.47502 14.2173 2.63881C14.1511 2.5705 14.0656 2.52215 13.9713 2.49965C13.8769 2.47715 13.7778 2.48147 13.6859 2.5121L11.7941 3.15765C11.7435 3.17381 11.6919 3.18717 11.6397 3.19766M2.43093 3.97125L3.73434 4.4154C4.05867 4.52611 4.40419 4.568 4.74704 4.53817C5.08989 4.50835 5.42191 4.40753 5.72016 4.24267C6.0184 4.07781 6.27578 3.85284 6.4745 3.5833C6.67322 3.31376 6.80856 3.00607 6.87116 2.68149L7.11738 1.38772C7.70157 1.31629 8.29286 1.31629 8.87706 1.38772L9.12466 2.68149C9.18683 3.00629 9.3219 3.31426 9.52051 3.58404C9.71913 3.85383 9.97654 4.07899 10.2749 4.24392C10.5733 4.40885 10.9055 4.50961 11.2485 4.53922C11.5915 4.56883 11.9372 4.52658 12.2615 4.4154L13.5635 3.96858C13.9196 4.41584 14.2117 4.89778 14.4399 5.4144L13.391 6.26402C13.1275 6.47736 12.9157 6.74329 12.7704 7.04322C12.6251 7.34316 12.5498 7.66989 12.5498 8.0006C12.5498 8.33131 12.6251 8.65803 12.7704 8.95797C12.9157 9.25791 13.1275 9.52383 13.391 9.73718L14.4413 10.5868C14.2136 11.1021 13.9191 11.5878 13.5649 12.0326L12.2615 11.5871C11.9372 11.4764 11.5916 11.4345 11.2488 11.4644C10.9059 11.4942 10.5739 11.595 10.2757 11.7599C9.97742 11.9247 9.72005 12.1497 9.52133 12.4192C9.3226 12.6888 9.18727 12.9965 9.12466 13.321L8.87706 14.6148C8.29286 14.6862 7.70157 14.6862 7.11738 14.6148L6.87116 13.321C6.809 12.9962 6.67393 12.6883 6.47532 12.4185C6.2767 12.1487 6.01929 11.9235 5.72091 11.7586C5.42253 11.5937 5.09033 11.4929 4.7473 11.4633C4.40428 11.4337 4.05865 11.4759 3.73434 11.5871L2.4351 12.0326C2.08087 11.5878 1.78644 11.1021 1.55874 10.5868L2.60759 9.73584C2.8709 9.52249 3.08249 9.25665 3.22764 8.95683C3.37278 8.65702 3.44797 8.33047 3.44797 7.99993C3.44797 7.66939 3.37278 7.34284 3.22764 7.04303C3.08249 6.74321 2.8709 6.47737 2.60759 6.26402L1.55735 5.4144C1.78734 4.89778 2.07946 4.41584 2.43371 3.96858"})]),(0,o.Lk)("path",{d:"M7.9993 5.33304C7.26145 5.33304 6.55381 5.61408 6.03206 6.11435C5.51032 6.61461 5.2172 7.29312 5.2172 8.0006C5.2172 8.70808 5.51032 9.38658 6.03206 9.88684C6.55381 10.3871 7.26145 10.6682 7.9993 10.6682C8.73716 10.6682 9.4448 10.3871 9.96655 9.88684C10.4883 9.38658 10.7814 8.70808 10.7814 8.0006C10.7814 7.29312 10.4883 6.61461 9.96655 6.11435C9.4448 5.61408 8.73716 5.33304 7.9993 5.33304ZM6.60825 8.0006C6.60825 7.64686 6.75481 7.3076 7.01568 7.05747C7.27656 6.80734 7.63037 6.66682 7.9993 6.66682C8.36823 6.66682 8.72205 6.80734 8.98292 7.05747C9.2438 7.3076 9.39035 7.64686 9.39035 8.0006C9.39035 8.35434 9.2438 8.69359 8.98292 8.94372C8.72205 9.19385 8.36823 9.33438 7.9993 9.33438C7.63037 9.33438 7.27656 9.19385 7.01568 8.94372C6.75481 8.69359 6.60825 8.35434 6.60825 8.0006ZM11.6411 3.19633C11.3846 3.24078 11.1202 3.18624 10.9055 3.04458C10.6908 2.90292 10.5432 2.68564 10.4948 2.44007L10.1332 0.551443C10.1161 0.45918 10.0705 0.373967 10.0023 0.306886C9.9341 0.239805 9.8464 0.193961 9.75064 0.175317C8.59534 -0.0584391 7.40188 -0.0584391 6.24658 0.175317C6.15082 0.193961 6.06312 0.239805 5.99489 0.306886C5.92667 0.373967 5.88107 0.45918 5.86404 0.551443L5.50376 2.44007C5.47745 2.57459 5.42105 2.70203 5.33844 2.81364C5.25582 2.92524 5.14896 3.01835 5.02521 3.08655C4.90146 3.15475 4.76377 3.19642 4.62161 3.2087C4.47945 3.22097 4.3362 3.20355 4.20174 3.15765L2.3113 2.5121C2.21946 2.48147 2.12031 2.47715 2.02595 2.49965C1.93159 2.52215 1.8461 2.5705 1.77992 2.63881C0.987951 3.47527 0.389663 4.46303 0.0244146 5.53711C-0.00607345 5.62591 -0.00805284 5.72144 0.0187328 5.81133C0.0455184 5.90122 0.099835 5.98132 0.174648 6.04128L1.70759 7.28302C1.74932 7.31592 1.78688 7.35194 1.82026 7.39106C1.90407 7.48515 1.96766 7.59419 2.00738 7.71192C2.04709 7.82965 2.06214 7.95375 2.05167 8.07708C2.0412 8.2004 2.00541 8.32053 1.94636 8.43055C1.88731 8.54057 1.80616 8.63832 1.70759 8.71817L0.174648 9.95992C0.099835 10.0199 0.0455184 10.1 0.0187328 10.1899C-0.00805284 10.2798 -0.00607345 10.3753 0.0244146 10.4641C0.390075 11.5383 0.988842 12.5261 1.78131 13.3624C1.84749 13.4307 1.93298 13.479 2.02734 13.5015C2.1217 13.524 2.22085 13.5197 2.31269 13.4891L4.20452 12.8435C4.33896 12.7972 4.48233 12.7794 4.62465 12.7914C4.76698 12.8035 4.90487 12.8451 5.02875 12.9134C5.15262 12.9817 5.25952 13.075 5.34203 13.1868C5.42454 13.2987 5.48067 13.4264 5.50654 13.5611L5.86543 15.4498C5.9016 15.6365 6.05323 15.7859 6.24797 15.8245C7.40372 16.0585 8.59767 16.0585 9.75342 15.8245C9.84874 15.8057 9.936 15.76 10.0039 15.6932C10.0719 15.6264 10.1174 15.5416 10.1346 15.4498L10.4962 13.5611C10.5225 13.4266 10.5789 13.2992 10.6616 13.1876C10.7442 13.076 10.851 12.9828 10.9748 12.9146C11.0985 12.8464 11.2362 12.8048 11.3784 12.7925C11.5206 12.7802 11.6638 12.7976 11.7983 12.8435L13.6887 13.4891C13.8765 13.5531 14.0865 13.5024 14.2201 13.3624C15.012 12.5259 15.6103 11.5382 15.9756 10.4641C16.0061 10.3753 16.0081 10.2798 15.9813 10.1899C15.9545 10.1 15.9002 10.0199 15.8254 9.95992L14.2924 8.71817C14.1833 8.63016 14.0955 8.52032 14.0354 8.39637C13.9752 8.27241 13.944 8.13733 13.944 8.0006C13.944 7.86386 13.9752 7.72878 14.0354 7.60483C14.0955 7.48087 14.1833 7.37104 14.2924 7.28302L15.8254 6.04128C15.9002 5.98132 15.9545 5.90122 15.9813 5.81133C16.0081 5.72144 16.0061 5.62591 15.9756 5.53711C15.6095 4.4628 15.0103 3.47502 14.2173 2.63881C14.1511 2.5705 14.0656 2.52215 13.9713 2.49965C13.8769 2.47715 13.7778 2.48147 13.6859 2.5121L11.7941 3.15765C11.7435 3.17381 11.6919 3.18717 11.6397 3.19766M2.43093 3.97125L3.73434 4.4154C4.05867 4.52611 4.40419 4.568 4.74704 4.53817C5.08989 4.50835 5.42191 4.40753 5.72016 4.24267C6.0184 4.07781 6.27578 3.85284 6.4745 3.5833C6.67322 3.31376 6.80856 3.00607 6.87116 2.68149L7.11738 1.38772C7.70157 1.31629 8.29286 1.31629 8.87706 1.38772L9.12466 2.68149C9.18683 3.00629 9.3219 3.31426 9.52051 3.58404C9.71913 3.85383 9.97654 4.07899 10.2749 4.24392C10.5733 4.40885 10.9055 4.50961 11.2485 4.53922C11.5915 4.56883 11.9372 4.52658 12.2615 4.4154L13.5635 3.96858C13.9196 4.41584 14.2117 4.89778 14.4399 5.4144L13.391 6.26402C13.1275 6.47736 12.9157 6.74329 12.7704 7.04322C12.6251 7.34316 12.5498 7.66989 12.5498 8.0006C12.5498 8.33131 12.6251 8.65803 12.7704 8.95797C12.9157 9.25791 13.1275 9.52383 13.391 9.73718L14.4413 10.5868C14.2136 11.1021 13.9191 11.5878 13.5649 12.0326L12.2615 11.5871C11.9372 11.4764 11.5916 11.4345 11.2488 11.4644C10.9059 11.4942 10.5739 11.595 10.2757 11.7599C9.97742 11.9247 9.72005 12.1497 9.52133 12.4192C9.3226 12.6888 9.18727 12.9965 9.12466 13.321L8.87706 14.6148C8.29286 14.6862 7.70157 14.6862 7.11738 14.6148L6.87116 13.321C6.809 12.9962 6.67393 12.6883 6.47532 12.4185C6.2767 12.1487 6.01929 11.9235 5.72091 11.7586C5.42253 11.5937 5.09033 11.4929 4.7473 11.4633C4.40428 11.4337 4.05865 11.4759 3.73434 11.5871L2.4351 12.0326C2.08087 11.5878 1.78644 11.1021 1.55874 10.5868L2.60759 9.73584C2.8709 9.52249 3.08249 9.25665 3.22764 8.95683C3.37278 8.65702 3.44797 8.33047 3.44797 7.99993C3.44797 7.66939 3.37278 7.34284 3.22764 7.04303C3.08249 6.74321 2.8709 6.47737 2.60759 6.26402L1.55735 5.4144C1.78734 4.89778 2.07946 4.41584 2.43371 3.96858",fill:"currentColor"})],-1),(0,o.eW)(" Настройки аккаунта ")])})),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"accessManagement"}},{default:(0,o.k6)((function(){return t[7]||(t[7]=[(0,o.Lk)("svg",{width:"18",height:"10",viewBox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M4.69614 6.23333H4.69565C4.2923 6.23333 3.94946 6.08938 3.66173 5.79832C3.37396 5.50722 3.23092 5.15957 3.23043 4.74988C3.22994 4.34039 3.37288 3.99317 3.66155 3.70265C3.95046 3.41188 4.29351 3.26766 4.6959 3.26667C5.09789 3.26568 5.44096 3.40972 5.73036 3.70247C6.01979 3.99525 6.16234 4.34253 6.16087 4.74964C6.1594 5.15733 6.01658 5.50532 5.72994 5.79875C5.44401 6.09146 5.10132 6.23531 4.69614 6.23333ZM8.6789 2.4255L8.70787 2.475H8.76522H15.6104L17.8594 4.75L14.4688 8.17981L12.9735 7.04533L12.913 6.99948L12.8526 7.04533L11.346 8.18834L9.74289 7.04362L9.71682 7.025H9.68478H8.76522H8.7079L8.67893 7.07445C8.26994 7.77262 7.71769 8.33471 7.02097 8.76161C6.32688 9.18691 5.5526 9.4 4.69565 9.4C3.4179 9.4 2.33485 8.9488 1.44068 8.04428C0.546471 7.13972 0.1 6.04359 0.1 4.75C0.1 3.45641 0.546471 2.36028 1.44068 1.45572C2.33485 0.551204 3.4179 0.1 4.69565 0.1C5.55206 0.1 6.32636 0.313088 7.021 0.738408C7.71822 1.16531 8.27045 1.72738 8.6789 2.4255ZM11.2505 6.43447L11.3102 6.47714L11.3688 6.43303L12.9118 5.27191L14.2405 6.31309L14.3106 6.36805L14.3733 6.30468L15.8407 4.8203L15.9102 4.75L15.8407 4.6797L15.0581 3.88803L15.0287 3.85833H14.987H7.80429C7.60978 3.18482 7.23651 2.62413 6.68614 2.17853C6.11377 1.71511 5.44889 1.48333 4.69565 1.48333C3.80767 1.48333 3.04522 1.80437 2.41367 2.44324C1.78215 3.08207 1.46522 3.8528 1.46522 4.75C1.46522 5.6472 1.78215 6.41793 2.41367 7.05676C3.04522 7.69563 3.80767 8.01667 4.69565 8.01667C5.44838 8.01667 6.11324 7.78488 6.68611 7.3215C7.23698 6.87591 7.61029 6.31521 7.80434 5.64167H10.1418L11.2505 6.43447Z",fill:"currentColor",stroke:"currentColor","stroke-width":"0.2"})],-1),(0,o.eW)(" Управление доступами ")])})),_:1})]),t[8]||(t[8]=(0,o.Lk)("hr",null,null,-1)),t[9]||(t[9]=(0,o.Lk)("li",null,[(0,o.Lk)("a",{class:"exit-but"},[(0,o.Lk)("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M13.1381 7.84776L13.3046 7.67778H13.0667H3.90952V6.32222H13.0667H13.3046L13.1381 6.15224L12.0245 5.01545L12.9536 4.03308L15.86 7L12.9536 9.96692L12.0245 8.98455L13.1381 7.84776ZM9.24286 12.4444V9.43333H10.5667V12.4444C10.5667 12.8462 10.4277 13.1872 10.1476 13.4731C9.86764 13.7589 9.5345 13.9 9.14286 13.9H1.52381C1.13217 13.9 0.799032 13.7589 0.519055 13.4731C0.239016 13.1872 0.1 12.8462 0.1 12.4444V1.55556C0.1 1.15385 0.239016 0.812795 0.519055 0.526922C0.799032 0.241113 1.13217 0.1 1.52381 0.1H9.14286C9.5345 0.1 9.86764 0.241113 10.1476 0.526923C10.4277 0.812795 10.5667 1.15385 10.5667 1.55556V4.56667H9.24286V1.55556V1.45556H9.14286H1.52381H1.42381V1.55556V12.4444V12.5444H1.52381H9.14286H9.24286V12.4444Z",fill:"#E50C00",stroke:"white","stroke-width":"0.2"})]),(0,o.eW)(" Выйти из аккаунта ")])],-1))])])):(0,o.Q3)("",!0)]})),_:1},8,["display","top","left"])],64)}}}),H=(0,u.A)(g,[["__scopeId","data-v-b4a3126e"]]),M=H;var b={class:"navigation__links"},V={key:0},y={class:"outBut"},_={key:0},x={key:1,class:"dropIcon"},O={key:0,width:"6",height:"4",viewBox:"0 0 6 4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Z={key:1,width:"6",height:"4",viewBox:"0 0 6 4",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},E={key:0,class:"dropdown-menu"},X={key:0},F={key:0},B={key:0,class:"dropdown-menu navigation__links"};const W=(0,o.pM)({__name:"menuUl",props:{isOpen:{type:Boolean}},setup:function(e){var t=e,C=(0,l.KR)(!1),a=(0,l.KR)(0),r=(0,l.KR)(0),u=(0,l.KR)(!1);function i(e){a.value=e.pageY||e.clientY,r.value=e.pageX||e.clientX,u.value=!0}function c(){a.value=0,r.value=0,u.value=!1}function L(e){t.isOpen?C.value=!C.value:i(e)}return function(e,t){var l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("ul",b,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"analitics"},onClick:t[0]||(t[0]=function(e){return C.value=!1})},{default:(0,o.k6)((function(){return[t[3]||(t[3]=(0,o.Lk)("div",{class:"iconMenu"},[(0,o.Lk)("svg",{width:"16",height:"13",viewBox:"0 0 16 13",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M9.69788 6.37319L9.65345 6.44138L9.7112 6.49873L11.1653 7.94278L10.5114 8.56265L9.08934 7.11601L9.03384 7.05954L8.96615 7.10062C8.75467 7.22896 8.54133 7.32457 8.32608 7.38812C8.1118 7.45138 7.88202 7.48333 7.63621 7.48333C6.97168 7.48333 6.39956 7.24997 5.9149 6.78027C5.4316 6.3119 5.19076 5.7391 5.19076 5.05556C5.19076 4.37201 5.4316 3.79921 5.9149 3.33084C6.39956 2.86114 6.97168 2.62778 7.63621 2.62778C8.30074 2.62778 8.87286 2.86114 9.35753 3.33084C9.84082 3.79921 10.0817 4.37201 10.0817 5.05556C10.0817 5.29944 10.0495 5.53072 9.98566 5.74979C9.92181 5.96884 9.826 6.17657 9.69788 6.37319ZM2.08167 9.38889V9.48889H2.18167H13.818H13.918V9.38889V1.44444V1.34444H13.818H2.18167H2.08167V1.44444V9.38889ZM6.53848 6.14665C6.84198 6.44805 7.2097 6.6 7.63621 6.6C8.06272 6.6 8.43044 6.44805 8.73395 6.14665C9.03748 5.84523 9.19076 5.47974 9.19076 5.05556C9.19076 4.63068 9.03391 4.26496 8.72411 3.96372C8.41549 3.66363 8.05143 3.51111 7.63621 3.51111C7.2097 3.51111 6.84198 3.66306 6.53848 3.96446C6.23495 4.26588 6.08167 4.63137 6.08167 5.05556C6.08167 5.47974 6.23495 5.84523 6.53848 6.14665ZM2.18167 10.7333C1.80817 10.7333 1.49105 10.6024 1.22486 10.3381C0.958687 10.0738 0.82712 9.75915 0.82712 9.38889V1.44444C0.82712 1.07418 0.958687 0.759584 1.22486 0.495262C1.49105 0.23092 1.80817 0.1 2.18167 0.1H13.818C14.1915 0.1 14.5086 0.23092 14.7748 0.495262C15.041 0.759584 15.1726 1.07418 15.1726 1.44444V9.38889C15.1726 9.75915 15.041 10.0738 14.7748 10.3381C14.5086 10.6024 14.1915 10.7333 13.818 10.7333H2.18167ZM0.0998474 12.9V11.6556H15.8998V12.9H0.0998474Z",fill:"currentColor",stroke:"white","stroke-width":"0.2"})])],-1)),e.isOpen?((0,o.uX)(),(0,o.CE)("p",V,"Аналитика проекта")):(0,o.Q3)("",!0)]})),_:1})]),(0,o.Lk)("li",y,[(0,o.Lk)("a",{onClick:L},[t[6]||(t[6]=(0,o.Fv)('<div class="iconMenu" data-v-672c212a><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-672c212a><path d="M11.2658 2.14609C10.7865 2.2411 10.3391 2.45592 9.96529 2.77052C9.59148 3.08512 9.30341 3.48926 9.12797 3.94526L9.12735 3.94604C8.9506 4.40955 8.896 4.91072 8.96877 5.40142C9.04154 5.89212 9.23926 6.35587 9.54292 6.74813L7.58176 12.1915C7.10076 12.2929 6.65352 12.5152 6.28224 12.8373C5.91096 13.1595 5.62788 13.571 5.45972 14.0329C5.29002 14.4999 5.24325 15.0027 5.32391 15.493C5.40456 15.9833 5.60993 16.4446 5.92029 16.8326L5.9255 16.8385C6.28123 17.268 6.9797 17.1537 7.17426 16.6191L7.71616 15.1321L8.45152 15.3997L7.90983 16.8862C7.71355 17.4255 8.18259 17.958 8.73203 17.8543L8.73523 17.8538C9.21449 17.7588 9.66188 17.544 10.0357 17.2294C10.4095 16.9148 10.6976 16.5107 10.873 16.0547L10.8736 16.0539C11.0489 15.5954 11.1044 15.0999 11.0351 14.614C10.9657 14.1281 10.7736 13.6679 10.4771 13.2768L12.4526 7.80116C12.9269 7.69574 13.367 7.4724 13.732 7.15181C14.0971 6.83122 14.3754 6.42373 14.5413 5.96704C14.711 5.50004 14.7577 4.99724 14.6771 4.50695C14.5964 4.01665 14.3911 3.55533 14.0807 3.1673L14.0755 3.16139C13.7198 2.73192 13.0213 2.84626 12.8267 3.38079L12.2848 4.86784L11.5491 4.60038L12.0912 3.11374C12.2874 2.57447 11.8184 2.04188 11.2689 2.14558L11.2658 2.14609ZM11.1507 3.09719L10.6593 4.44642C10.6261 4.53636 10.611 4.63199 10.615 4.72778C10.6189 4.82358 10.6418 4.91763 10.6824 5.00453C10.7229 5.09142 10.7802 5.16942 10.851 5.23403C10.9219 5.29864 11.0048 5.34858 11.0951 5.38095L12.1311 5.75803C12.221 5.79117 12.3166 5.80618 12.4124 5.80219C12.5082 5.7982 12.6022 5.77529 12.6891 5.73477C12.776 5.69426 12.854 5.63695 12.9186 5.56615C12.9832 5.49535 13.0332 5.41245 13.0656 5.32225L13.5574 3.97282C13.7234 4.25949 13.8158 4.58284 13.8263 4.91394C13.8368 5.24505 13.765 5.57359 13.6175 5.87019C13.47 6.16679 13.2512 6.4222 12.9808 6.61357C12.7104 6.80495 12.3968 6.92633 12.068 6.96685C11.9865 6.97693 11.9095 7.00937 11.8453 7.06058C11.7811 7.11179 11.7324 7.17977 11.7045 7.25697L9.55576 13.214C9.52825 13.2902 9.5221 13.3725 9.53797 13.452C9.55385 13.5315 9.59115 13.6051 9.64584 13.6649C9.89796 13.9389 10.0688 14.2777 10.1391 14.6433C10.2095 15.0089 10.1766 15.3869 10.0442 15.735C9.94083 16.0039 9.78067 16.2473 9.57467 16.4487C9.36867 16.6502 9.12168 16.8048 8.85051 16.9021L9.34171 15.5535C9.37492 15.4636 9.38997 15.3679 9.38601 15.2721C9.38205 15.1763 9.35915 15.0823 9.31863 14.9954C9.27811 14.9085 9.22078 14.8305 9.14994 14.7659C9.07911 14.7013 8.99618 14.6513 8.90593 14.619L7.87052 14.2421C7.78058 14.209 7.68496 14.194 7.58918 14.1979C7.49341 14.2019 7.39937 14.2249 7.3125 14.2654C7.22562 14.3059 7.14762 14.3632 7.083 14.434C7.01838 14.5048 6.96842 14.5877 6.93599 14.6779L6.44439 16.0267C6.27729 15.7381 6.18484 15.4124 6.17539 15.0791C6.16595 14.7457 6.23982 14.4153 6.39031 14.1177C6.5408 13.8201 6.76315 13.5648 7.03723 13.3748C7.3113 13.1849 7.62844 13.0663 7.95992 13.0298C8.04264 13.0208 8.12116 12.9887 8.18654 12.9372C8.25193 12.8858 8.30155 12.817 8.32976 12.7387L10.4661 6.80756C10.4938 6.7305 10.4996 6.6473 10.483 6.56712C10.4664 6.48695 10.428 6.41293 10.3719 6.35322C10.1136 6.07922 9.93769 5.73799 9.86433 5.36863C9.79097 4.99927 9.82314 4.61671 9.95715 4.26478C10.0606 3.9958 10.2208 3.75228 10.4269 3.55082C10.6329 3.34936 10.88 3.19471 11.1513 3.0974" fill="currentColor" data-v-672c212a></path><path d="M3.62831 6.63184L3.66418 6.59488L3.70006 6.63184L4.20254 7.14955L4.23634 7.18437L4.20254 7.2192L1.90796 9.58333L4.20254 11.9475L4.23634 11.9823L4.20254 12.0171L3.70006 12.5348L3.66418 12.5718L3.62831 12.5348L0.797449 9.61816L0.76365 9.58333L0.797449 9.54851L3.62831 6.63184Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" data-v-672c212a></path><path d="M16.3717 12.5348L16.3358 12.5717L16.2999 12.5348L15.7975 12.0171L15.7637 11.9823L15.7975 11.9474L18.092 9.58329L15.7975 7.21916L15.7637 7.18433L15.7975 7.14951L16.2999 6.6318L16.3358 6.59484L16.3717 6.6318L19.2026 9.54847L19.2364 9.58329L19.2026 9.61812L16.3717 12.5348Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" data-v-672c212a></path></svg></div>',1)),e.isOpen?((0,o.uX)(),(0,o.CE)("p",_,"Позиции из Я.Вебмастера")):(0,o.Q3)("",!0),e.isOpen?((0,o.uX)(),(0,o.CE)("div",x,[C.value?((0,o.uX)(),(0,o.CE)("svg",Z,t[5]||(t[5]=[(0,o.Lk)("path",{d:"M0.428388 4C0.348798 4 0.270779 3.97931 0.203075 3.94026C0.135371 3.90121 0.0806566 3.84533 0.0450625 3.77889C0.00946843 3.71244 -0.00559888 3.63806 0.00154882 3.56408C0.00869653 3.49009 0.0377768 3.41943 0.0855313 3.36L2.65696 0.16C2.69688 0.110322 2.74864 0.0700002 2.80815 0.0422291C2.86766 0.014458 2.93328 0 2.99982 0C3.06635 0 3.13197 0.014458 3.19148 0.0422291C3.25099 0.0700002 3.30275 0.110322 3.34267 0.16L5.9141 3.36C5.96186 3.41943 5.99094 3.49009 5.99809 3.56408C6.00523 3.63806 5.99016 3.71244 5.95457 3.77889C5.91898 3.84533 5.86426 3.90121 5.79656 3.94026C5.72885 3.97931 5.65084 4 5.57124 4L0.428388 4Z",fill:"currentColor"},null,-1)]))):((0,o.uX)(),(0,o.CE)("svg",O,t[4]||(t[4]=[(0,o.Lk)("path",{d:"M5.57143 3.74669e-08C5.65102 3.05089e-08 5.72904 0.0206857 5.79674 0.0597396C5.86445 0.0987935 5.91916 0.154672 5.95475 0.221115C5.99035 0.287557 6.00542 0.361938 5.99827 0.435922C5.99112 0.509907 5.96204 0.580572 5.91429 0.64L3.34286 3.84C3.30294 3.88968 3.25117 3.93 3.19166 3.95777C3.13215 3.98554 3.06653 4 3 4C2.93347 4 2.86785 3.98554 2.80834 3.95777C2.74883 3.93 2.69706 3.88968 2.65714 3.84L0.085716 0.640001C0.0379617 0.580573 0.00888031 0.509907 0.00173251 0.435923C-0.00541528 0.361938 0.00965324 0.287557 0.0452472 0.221115C0.0808412 0.154673 0.135555 0.098794 0.203259 0.0597401C0.270963 0.0206862 0.348982 4.94028e-07 0.428573 4.8707e-07L5.57143 3.74669e-08Z",fill:"currentColor"},null,-1)])))])):(0,o.Q3)("",!0)]),e.isOpen?(0,o.bo)(((0,o.uX)(),(0,o.CE)("ul",E,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"requestsWebMaster"}},{default:(0,o.k6)((function(){return t[7]||(t[7]=[(0,o.eW)("Запросы Я.Вебмастер")])})),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"urlWebMaster"}},{default:(0,o.k6)((function(){return t[8]||(t[8]=[(0,o.eW)("URLs Я.Вебмастер")])})),_:1})])],512)),[[n.aG,C.value]]):(0,o.Q3)("",!0)]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"liveSearch"},onClick:t[1]||(t[1]=function(e){return C.value=!1})},{default:(0,o.k6)((function(){return[t[9]||(t[9]=(0,o.Lk)("div",{class:"iconMenu"},[(0,o.Lk)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M7.75421 12.8457H7.09057C5.76625 12.8457 4.49662 12.3318 3.56087 11.4177C2.62521 10.5036 2.1 9.26445 2.1 7.97285C2.1 6.68126 2.62521 5.44207 3.56087 4.52805C4.49662 3.61394 5.76625 3.1 7.09057 3.1H12.9084H12.9084C13.7508 3.09983 14.5795 3.30789 15.3172 3.70466C16.0549 4.10142 16.6776 4.67393 17.1275 5.36867C17.5774 6.0634 17.8399 6.85784 17.8909 7.67804C17.9376 8.43061 17.8048 9.18261 17.504 9.87516C17.2611 9.4237 16.9499 9.01041 16.5806 8.64937C16.6797 8.13537 16.6648 7.60632 16.5365 7.09808C16.4037 6.57192 16.1528 6.08137 15.8021 5.66193C15.4515 5.24249 15.0099 4.90467 14.5094 4.67279C14.009 4.4409 13.4621 4.32071 12.9084 4.32081C12.9084 4.32081 12.9084 4.32081 12.9084 4.32081H7.09057C6.10044 4.32081 5.1504 4.70503 4.44957 5.38965C3.74866 6.07435 3.35445 7.00351 3.35445 7.97285C3.35445 8.9422 3.74866 9.87136 4.44957 10.5561C5.1504 11.2407 6.10044 11.6249 7.09057 11.6249H7.75421C7.70392 12.0303 7.70392 12.4403 7.75421 12.8457ZM15.8595 14.1379L15.8127 14.207L15.8725 14.2654L17.6428 15.9955L16.7576 16.8602L14.9832 15.1276L14.9261 15.0718L14.8591 15.1151C14.326 15.4593 13.7073 15.6561 13.0686 15.6844C12.4299 15.7126 11.7954 15.5713 11.2325 15.2756C10.6697 14.9799 10.1998 14.5409 9.87231 14.0056C9.54489 13.4703 9.37215 12.8585 9.37225 12.2353C9.37238 11.6975 9.50125 11.167 9.74868 10.6863C9.99611 10.2056 10.3553 9.78779 10.7978 9.46646C11.2402 9.14513 11.7536 8.9292 12.297 8.83609C12.8405 8.74298 13.3986 8.77529 13.9269 8.93042C14.4552 9.08554 14.9388 9.35914 15.3393 9.72917C15.7397 10.0992 16.0458 10.5554 16.2334 11.0612C16.4209 11.567 16.4848 12.1086 16.4199 12.6427C16.355 13.1768 16.1632 13.6888 15.8595 14.1379ZM12.9084 10.0041C12.304 10.0041 11.7239 10.2386 11.2958 10.6568C10.8677 11.075 10.6267 11.6428 10.6267 12.2353C10.6267 12.8278 10.8677 13.3956 11.2958 13.8138C11.7239 14.232 12.304 14.4665 12.9084 14.4665C13.5128 14.4665 14.0929 14.232 14.5209 13.8138C14.9491 13.3956 15.19 12.8278 15.19 12.2353C15.19 11.6428 14.9491 11.075 14.5209 10.6568C14.0929 10.2386 13.5128 10.0041 12.9084 10.0041Z",fill:"currentColor",stroke:"white","stroke-width":"0.2"})])],-1)),e.isOpen?((0,o.uX)(),(0,o.CE)("p",X,"Съем позиций (Live/XML)")):(0,o.Q3)("",!0)]})),_:1})]),t[11]||(t[11]=(0,o.Lk)("hr",null,null,-1)),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"project"},onClick:t[2]||(t[2]=function(e){return C.value=!1})},{default:(0,o.k6)((function(){return[t[10]||(t[10]=(0,o.Lk)("div",{class:"iconMenu"},[(0,o.Lk)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[(0,o.Lk)("path",{d:"M3.57778 7.33333V7.53333H3.77778H7.33333H7.53333V7.33333V3.77778V3.57778H7.33333H3.77778H3.57778V3.77778V7.33333ZM12.4667 7.33333V7.53333H12.6667H16.2222H16.4222V7.33333V3.77778V3.57778H16.2222H12.6667H12.4667V3.77778V7.33333ZM12.4667 16.2222V16.4222H12.6667H16.2222H16.4222V16.2222V12.6667V12.4667H16.2222H12.6667H12.4667V12.6667V16.2222ZM3.57778 16.2222V16.4222H3.77778H7.33333H7.53333V16.2222V12.6667V12.4667H7.33333H3.77778H3.57778V12.6667V16.2222ZM2.2 8.91111V2.2H8.91111V8.91111H2.2ZM2.2 17.8V11.0889H8.91111V17.8H2.2ZM11.0889 8.91111V2.2H17.8V8.91111H11.0889ZM11.0889 17.8V11.0889H17.8V17.8H11.0889Z",fill:"currentColor",stroke:"white","stroke-width":"0.4"})])],-1)),e.isOpen?((0,o.uX)(),(0,o.CE)("p",F,"Мои проекты")):(0,o.Q3)("",!0)]})),_:1})])]),(0,o.bF)(s,{class:"contextMenu",display:u.value,top:a.value,left:r.value,onClose:c},{default:(0,o.k6)((function(){return[e.isOpen?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("ul",B,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"requestsWebMaster"}},{default:(0,o.k6)((function(){return t[12]||(t[12]=[(0,o.eW)("Ключевые слова")])})),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:{name:"urlWebMaster"}},{default:(0,o.k6)((function(){return t[13]||(t[13]=[(0,o.eW)("URLs")])})),_:1})])]))]})),_:1},8,["display","top","left"])],64)}}}),R=(0,u.A)(W,[["__scopeId","data-v-672c212a"]]),K=R;var j={class:"navigation__logo"},A={key:0},Q={key:1,class:"shortName"},I=["src"];const q=(0,o.pM)({__name:"MenuSide",props:{isOpen:{type:Boolean}},emits:["close"],setup:function(e,t){t.emit;return function(e,t){var n=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",{class:(0,a.C4)(["content",{"short-content":!e.isOpen}])},[(0,o.Lk)("div",j,[(0,o.bF)(n,{to:{name:"home"}},{default:(0,o.k6)((function(){return[e.isOpen?((0,o.uX)(),(0,o.CE)("b",A," SEO ")):((0,o.uX)(),(0,o.CE)("b",Q," S "))]})),_:1}),e.isOpen?((0,o.uX)(),(0,o.CE)("img",{key:0,src:C(8532),onClick:t[0]||(t[0]=function(t){return e.$emit("close")})},null,8,I)):(0,o.Q3)("",!0)]),(0,o.bF)(K,{"is-open":e.isOpen},null,8,["is-open"])],2)}}}),S=(0,u.A)(q,[["__scopeId","data-v-32af7387"]]),T=S;var Y={class:"container"},$={class:"container__view"},N={class:"main"};const P=(0,o.pM)({__name:"MainLayout",setup:function(e){var t=(0,l.KR)(!0);return function(e,C){var n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",Y,[(0,o.bF)(T,{class:"asside",isOpen:t.value,onClose:C[0]||(C[0]=function(e){return t.value=!1})},null,8,["isOpen"]),(0,o.Lk)("div",$,[(0,o.bF)(M,{class:"main-header",isOpen:t.value,onOpen:C[1]||(C[1]=function(e){return t.value=!0})},null,8,["isOpen"]),(0,o.Lk)("main",N,[(0,o.bF)(n)])])])}}}),U=(0,u.A)(P,[["__scopeId","data-v-162d11e3"]]),G=U;var z=C(1387);const D=(0,o.pM)({__name:"App",setup:function(e){var t=(0,z.lq)(),C={main:G},n=(0,o.EW)((function(){return t.meta.layout}));return function(e,t){var l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)((0,o.$y)(C[n.value]),null,{default:(0,o.k6)((function(){return[(0,o.bF)(l)]})),_:1})}}}),J=D,ee=J;var te={class:"home"};function Ce(e,t){return(0,o.uX)(),(0,o.CE)("div",te)}const ne={},oe=(0,u.A)(ne,[["render",Ce]]),le=oe;var ae=[{path:"/",name:"home",component:le,meta:{layout:"main"}},{path:"/analitics",name:"analitics",component:le,meta:{layout:"main"}},{path:"/webMaster",name:"webMaster",component:le,meta:{layout:"main"}},{path:"/requests",name:"requestsWebMaster",component:le,meta:{layout:"main"}},{path:"/url",name:"urlWebMaster",component:le,meta:{layout:"main"}},{path:"/liveSearch",name:"liveSearch",component:le,meta:{layout:"main"}},{path:"/project",name:"project",component:le,meta:{layout:"main"}},{path:"/setting/account",name:"settingAccount",component:le,meta:{layout:"main"}},{path:"/accessmanagement",name:"accessManagement",component:le,meta:{layout:"main"}}],re=(0,z.aE)({history:(0,z.LA)("/"),routes:ae});const ue=re;var ie=(0,n.Ef)(ee);ie.use(ue),ie.mount("#app")},5291:(e,t,C)=>{e.exports=C.p+"img/AccountIcon.db38350a.svg"},6655:(e,t,C)=>{e.exports=C.p+"img/Button.79e3d437.svg"},4876:(e,t,C)=>{e.exports=C.p+"img/PlusIcon.5d7d6f3f.svg"},8532:(e,t,C)=>{e.exports=C.p+"img/arrowBackIcon.aa956d9c.svg"},145:(e,t,C)=>{e.exports=C.p+"img/menuIcon.43be6b78.svg"}},t={};function C(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,C),l.exports}C.m=e,(()=>{var e=[];C.O=(t,n,o,l)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,o,l]=e[s],r=!0,u=0;u<n.length;u++)(!1&l||a>=l)&&Object.keys(C.O).every((e=>C.O[e](n[u])))?n.splice(u--,1):(r=!1,l<a&&(a=l));if(r){e.splice(s--,1);var i=o();void 0!==i&&(t=i)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,o,l]}})(),(()=>{C.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return C.d(t,{a:t}),t}})(),(()=>{C.d=(e,t)=>{for(var n in t)C.o(t,n)&&!C.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{C.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{C.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{C.p="/"})(),(()=>{var e={524:0};C.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[a,r,u]=n,i=0;if(a.some((t=>0!==e[t]))){for(o in r)C.o(r,o)&&(C.m[o]=r[o]);if(u)var s=u(C)}for(t&&t(n);i<a.length;i++)l=a[i],C.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return C.O(s)},n=self["webpackChunktestwork"]=self["webpackChunktestwork"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=C.O(void 0,[504],(()=>C(1343)));n=C.O(n)})();
//# sourceMappingURL=app.b8989957.js.map