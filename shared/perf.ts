/** @private **/
export async function $perf(cb: Function): Promise<void> {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    await Promise.resolve(cb(() => {
        const diff = process.hrtime(time);

        return diff[0] + (diff[1] / NS_PER_SEC )
    }));

    const diff = process.hrtime(time);

    console.log(`${diff[0] + (diff[1] / NS_PER_SEC )} seconds`);
}