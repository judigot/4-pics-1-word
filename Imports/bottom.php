<!--Bootstrap Tooltip-->
<script>
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
<!--Bootstrap Confirmation-->
<script>
    $('[data-toggle=confirmation]').confirmation({
        rootSelector: '[data-toggle=confirmation]',
    });
</script>
<!--Context-Menu-->
<script type="text/javascript">
    $(function () {
        $.contextMenu({
            selector: '.context-menu-one',
            callback: function (key, options) {
                if (key === "Refresh") {
                    $.notify(key, 'success');
                } else if (key === "Edit") {
                    $.notify(key, 'success');
                } else if (key === "Cut") {
                    $.notify(key, 'success');
                } else if (key === "Copy") {
                    $.notify(key, 'success');
                } else if (key === "Paste") {
                    $.notify(key, 'success');
                } else if (key === "Delete") {
                    $.notify(key, 'success');
                } else if (key === "Properties") {
                    $.notify(key, 'success');
                } else if (key === "Name") {
                    $.notify(key, 'success');
                }
            },
            items: {
                "SortBy": {
                    "name": "Sort by",
                    "items": {
                        "Name": {"name": "Name"},
                        "Size": {"name": "Size"},
                        "ItemType": {"name": "Item type"},
                        "DateModified": {"name": "Date modified"},
                        "View": {
                            "name": "View",
                            "items": {
                                "Large": {"name": "Large icons"},
                                "Medium": {"name": "Medium icons"},
                                "Small": {"name": "Small icons"}
                            }
                        }
                    }
                },
                "Refresh": {name: "Refresh"},
                "sep1": "---------",
                "Edit": {name: "Edit"},
                "Cut": {name: "Cut"},
                "Copy": {name: "Copy"},
                "Paste": {name: "Paste"},
                "Delete": {name: "Delete"},
                "sep2": "---------",
                "Properties": {name: "Properties"}
            }
        });
        $('.context-menu-one').on('click', function (e) {
            console.log('clicked', this);
        });
    });
</script>