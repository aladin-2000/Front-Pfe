import { Wallet } from "./wallet.model";
import { WalletGroup } from "./walletGroup.model";

export class WalletLots {
    id: string;
    name: string;
    wallets: Wallet[];
    walletRef : Wallet ;
    isTechnical : boolean ;
    isLotOfWorkFlow : boolean;
    walletGroup : WalletGroup ;

    constructor(id: string, name: string, wallets: Wallet[], walletGroup : WalletGroup , walletRef : Wallet , isTechnical : boolean , isLotOfWorkFlow : boolean ) {
        this.id = id;
        this.name = name;
        this.wallets = wallets;
        this.walletGroup = walletGroup;
        this.walletRef = walletRef ;
        this.isTechnical = isTechnical;
        this.isLotOfWorkFlow = isLotOfWorkFlow
    }
}
