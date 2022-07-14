
export const Video = () => {
    return (
        <>
            <div>
                <button id="enableCamera">Enable Camera</button>
                <button id="disableCamera">Disable Camera</button>

                <button id="startRecording">Start Recording</button>
                <button id="stopRecording">Stop Recording</button>

                <input type="color" id="primaryColor" name="primaryColor" />
            </div>
        </>
    );
}