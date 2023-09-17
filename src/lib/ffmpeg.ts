import {FFmpeg} from '@ffmpeg/ffmpeg';
import coreURL from '../ffmpeg/ffmpeg-core.js?url';
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url';
import workerURL from '../ffmpeg/ffmpeg-worker.js?url';

///home/carlos/nlw/ai/aulas/upload-ai-web/src/ffmpeg/ffmpeg-core.js
///home/carlos/nlw/ai/aulas/upload-ai-web/src/ffmpeg/ffmpeg-core.wasm
///home/carlos/nlw/ai/aulas/upload-ai-web/src/ffmpeg/ffmpeg-worker.js
let ffmpeg: FFmpeg|null

export async function getFFmpeg() {
    if (ffmpeg) {
        return ffmpeg
    }

    ffmpeg = new FFmpeg()

    if (!ffmpeg.loaded) {
        await ffmpeg.load(
            coreURL,
            wasmURL,
            workerURL,
        )
    }

    return ffmpeg
}

