export async function onRequest (context) {
    return await fetch(`https://q1.qlogo.cn/g?b=qq&s=640&nk=${context.params.id}`)
}