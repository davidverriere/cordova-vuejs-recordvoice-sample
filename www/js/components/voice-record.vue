<template>
    <div>
        <input type="button" @click="voiceRecord()" value="Record" />
        <input type="button" @click="playRecord()" value="Play" />
    </div>
</template>
<script>
    export default {
        methods: {
            playRecord() {
                if (this.mediaPlayer && (this.mediaRecorderStatus === Media.MEDIA_STARTING || this.mediaRecorderStatus === Media.MEDIA_RUNNING)) {
                    this.mediaPlayer.stop();
                    return;
                }
                this.mediaPlayer = new Media(this.mediarSrc, null, function (err) {
                    console.log("media err", err);
                });
                this.mediaPlayer.play();
            },
            voiceRecord() {
                if (this.mediaRecorder && (this.mediaRecorderStatus === Media.MEDIA_STARTING || this.mediaRecorderStatus === Media.MEDIA_RUNNING)) {
                    this.mediaRecorder.stopRecord();
                    return;
                }
                this.mediaRecorder = new Media(this.mediarSrc, this.onRecordSuccess, this.onRecordFail, this.onmediaRecorderStatusChange);
                this.mediaRecorder.startRecord();
            },
            onRecordSuccess(mediaFiles) {
                console.log('record start');
            },
            onRecordFail(message) {
                alert('Failed because: ' + message);
            },
            onmediaRecorderStatusChange(status) {
                this.mediaRecorderStatus = status;
            }
        },
        data() {
            return {
                mediaPlayer: null,
                mediaRecorder: null,
                mediaRecorderStatus: 0,
                mediarSrc: 'myrecording.mp3'
            }
        }
    }
</script>