var $gXNCa$jstemporalpolyfill = require("@js-temporal/polyfill");
var $gXNCa$faunadb = require("faunadb");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "API", () => $5fca6a40602fccad$export$2e2bcd8739ae039);

const $eea3551a91f0b428$export$d395cf2f8c1b1775 = (id, domain, timezone, page, referer)=>{
    return {
        id: id,
        type: 'page',
        domain: domain,
        timezone: timezone,
        page: page,
        referer: referer
    };
};
const $eea3551a91f0b428$export$a68cf31a3bee210c = (id, domain, timezone, page, action)=>{
    return {
        id: id,
        type: 'action',
        domain: domain,
        timezone: timezone,
        page: page,
        action: action
    };
};



let $3a06bef07b5849c9$var$q = $gXNCa$faunadb.query;
const $3a06bef07b5849c9$var$faunaSDK = new $gXNCa$faunadb.Client({
    secret: undefined,
    domain: 'db.fauna.com',
    // NOTE: Use the correct domain for your database's Region Group.
    port: 443,
    scheme: 'https'
});
//add trycatch for devesive coding
const $3a06bef07b5849c9$export$185802fd694ee1f5 = async (data, col)=>{
    return await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Create($3a06bef07b5849c9$var$q.Collection(col), {
        data: data
    }));
};
const $3a06bef07b5849c9$var$read = async (id, col = "theplug")=>{
    //console.log("id tp read",id)
    return await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Get($3a06bef07b5849c9$var$q.Ref($3a06bef07b5849c9$var$q.Collection(col), id)));
};
const $3a06bef07b5849c9$export$722fbec263ad908a = async (data, id, col)=>{
    return await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Update($3a06bef07b5849c9$var$q.Ref($3a06bef07b5849c9$var$q.Collection(col), id), {
        data: data
    }));
};
const $3a06bef07b5849c9$var$remove = async (id, col = "theplug")=>{
    console.log("removing the data", id);
    return await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Delete($3a06bef07b5849c9$var$q.Ref($3a06bef07b5849c9$var$q.Collection(col), id)));
};
const $3a06bef07b5849c9$var$findById = async (id, index = "identity")=>{
    return await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Get($3a06bef07b5849c9$var$q.Match($3a06bef07b5849c9$var$q.Index(index), id)));
};
const $3a06bef07b5849c9$var$findByIndex = async (id, index = "analyticIdentity ")=>{
    let result = await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Paginate($3a06bef07b5849c9$var$q.Match($3a06bef07b5849c9$var$q.Index(index), id)));
    let exp = result.data.map((i)=>$3a06bef07b5849c9$var$q.Get(i)
    );
    let data = await $3a06bef07b5849c9$var$faunaSDK.query(exp);
    return data;
};
const $3a06bef07b5849c9$var$getAll = async (index = "genus")=>{
    let result = await $3a06bef07b5849c9$var$faunaSDK.query($3a06bef07b5849c9$var$q.Paginate($3a06bef07b5849c9$var$q.Documents($3a06bef07b5849c9$var$q.Collection(index))));
    let exp = result.data.map((i)=>$3a06bef07b5849c9$var$q.Get(i)
    );
    let data = await $3a06bef07b5849c9$var$faunaSDK.query(exp);
    return data;
};


const $fab3f2360fc715ec$var$initAnalytics = async (id, domain, page, referer)=>{
    return await $3a06bef07b5849c9$export$185802fd694ee1f5($eea3551a91f0b428$export$d395cf2f8c1b1775(id, domain, $gXNCa$jstemporalpolyfill.Temporal.Now.timeZone().toJSON(), page, referer), 'analytics');
};
const $fab3f2360fc715ec$var$trackPage = async (page)=>{
    await $fab3f2360fc715ec$var$initAnalytics(localStorage.getItem('id'), window.location.origin, page, document.referrer);
};
var $fab3f2360fc715ec$export$2e2bcd8739ae039 = {
    initAnalytics: $fab3f2360fc715ec$var$initAnalytics,
    trackPage: $fab3f2360fc715ec$var$trackPage
};


var $5fca6a40602fccad$export$2e2bcd8739ae039 = {
    AnalyticsAPI: $fab3f2360fc715ec$export$2e2bcd8739ae039
};




//# sourceMappingURL=index.js.map
