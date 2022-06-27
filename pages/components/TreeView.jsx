import React from 'react';
const TreeView = () => {
    return (
        <ul>
            <li className="root">執行長
                <ul>
                    <li>研發部
                        <ul>
                            <li>產品團隊
                                <ul>
                                    <li>專案經理</li>
                                    <li>系統分析</li>
                                    <li>開發工程師</li>
                                </ul>

                            </li>
                            <li>專案團隊
                                <ul>
                                    <li>專案一部
                                        <ul>
                                            <li>PM</li>
                                            <li>RD</li>
                                        </ul>
                                    </li>
                                    <li>專案二部
                                        <ul>
                                            <li>PM</li>
                                            <li>RD</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>訓練團隊
                            </li>
                        </ul>
                    </li>
                    <li>業務團隊</li>
                </ul>
            </li>
        </ul>
    );
}

export default TreeView;
