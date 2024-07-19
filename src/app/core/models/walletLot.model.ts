import { Wallet } from "./wallet.model";
import { WalletGroup } from "./walletGroup.model";

export class WalletLots {
    id: string;
    name: string;
    wallets: Wallet[];
    walletGroup : WalletGroup ;

    constructor(id: string, name: string, wallets: Wallet[], walletGroup : WalletGroup ) {
        this.id = id;
        this.name = name;
        this.wallets = wallets;
        this.walletGroup = walletGroup;
    }
}
