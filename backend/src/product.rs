use ic_cdk::export::{candid::{CandidType, Deserialize}};
use ic_cdk::storage;
use ic_cdk_macros::*;
use std::collections::BTreeMap;


// implementation to user internet computer identity
// type IdStore = BTreeMap<String, Principal>;
type ProductStore = BTreeMap<String, Product>;

#[derive(Clone, Debug, Default, CandidType, Deserialize)]
struct Product {
    pub name: String,
    pub brand: String,
    pub description: String,
    pub price: f32,
    pub quantity: i32
}



#[query]
fn get_product(id:String) -> Product {
    // let id_store = storage::get::<IdStore>();
    let product_store = storage::get::<ProductStore>();

    product_store
        .get(&id)
        .cloned()
        .unwrap_or_else(|| Product::default())

}

#[update]
fn update_product(id:String, product: Product) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let product_store = storage::get_mut::<ProductStore>();

    // profile_store.insert(id, principal_id.clone());
    product_store.insert(id, product);
}

#[update]
fn remove_product(id:String) {
    // let principal_id = ic_cdk::caller();
    // let id_store = storage::get_mut::<IdStore>();
    let product_store = storage::get_mut::<ProductStore>();

    // profile_store.insert(id, principal_id.clone());
    product_store.remove(&id);
}

#[query]
fn product_exist(id: String) -> bool{

    let store = storage::get::<ProductStore>();

    let is_product = store.contains_key(&id);

    return is_product;
}