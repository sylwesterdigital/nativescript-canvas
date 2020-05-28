<template>
    <Page>
       
        <ActionBar>
            <Label :text="actionBar.title"></Label>
        </ActionBar>

		<GridLayout iosOverflowSafeArea="false">
			<TNSCanvas
              id="canvas" 
			  iosOverflowSafeArea="true" 
			  col="0"
			  row="0"
			  @ready="onCanvasReady"
			 />
		</GridLayout>
   
    </Page>
</template>

<script>
  
  
  /*
   I stuck here - error
   
   /Users/misiak/Desktop/2020/apps/nativescript-canvas/vue-canvas/platforms/ios/Pods/CanvasNative/CanvasNative/Source/Canvas.swift: 15: 14: Fatal error: Use of unimplemented initializer 'init(frame:)' for class 'CanvasNative.Canvas'
   
  */
  
  const canvas = new Canvas();
  
  
    export default {
      
        data() {
          return {
            actionBar: { 
              title: 'NS - Pure Vue - Canvas - Demo'
            }
          }
        },
      
        computed: {
            message() {
                return "Blank {N}-Vue app";
            },
        },
        
        methods: {
            
            onCanvasReady() {
              
              console.log('onCanvasReady')

                const ctx = canvas.getContext('2d');
                ctx.beginPath();
                ctx.fillStyle = 'red';
                ctx.arc(150, 75, 50, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();            

            }
            
          }

    };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
